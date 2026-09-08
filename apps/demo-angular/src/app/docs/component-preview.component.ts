import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErbTabsComponent, ErbTabDirective, ErbTabsListComponent, ErbTabsPanelComponent } from '@glowing-sea-studio/erebus-angular';

@Component({
  selector: 'app-component-preview',
  standalone: true,
  imports: [
    CommonModule,
    ErbTabsComponent,
    ErbTabDirective,
    ErbTabsListComponent,
    ErbTabsPanelComponent
  ],
  template: `
    <div style="margin-bottom: 3rem;">
      <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem; color: var(--erb-color-neutral-fg);">{{ title }}</h2>
      <p *ngIf="description" style="color: var(--erb-color-fg-muted); margin-bottom: 1.5rem;">{{ description }}</p>
      
      <div style="border: 1px solid var(--erb-color-border-default); border-radius: 8px; overflow: hidden;">
        <erb-tabs defaultValue="preview">
          <div style="/* removed border */; padding: 0 1rem; background-color: var(--erb-color-bg-subtle);">
            <erb-tabs-list>
              <button erbTab value="preview">Preview</button>
              <button erbTab value="ts">Code (TS)</button>
              <button erbTab value="html">Code (HTML)</button>
            </erb-tabs-list>
          </div>
          
          <erb-tabs-panel value="preview" style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem; background-color: var(--erb-color-bg-base);">
            <ng-content></ng-content>
          </erb-tabs-panel>
          
          <erb-tabs-panel value="ts" style="padding: 0; margin: 0;">
            <pre style="margin: 0; padding: 1.5rem; background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto; font-size: 0.875rem; font-family: monospace;"><code>{{ codeTs.trim() }}</code></pre>
          </erb-tabs-panel>
          
          <erb-tabs-panel value="html" style="padding: 0; margin: 0;">
            <pre style="margin: 0; padding: 1.5rem; background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto; font-size: 0.875rem; font-family: monospace;"><code>{{ codeHtml.trim() }}</code></pre>
          </erb-tabs-panel>
        </erb-tabs>
      </div>
    </div>
  `
})
export class ComponentPreviewComponent {
  @Input({ required: true }) title!: string;
  @Input() description?: string;
  @Input() codeTs: string = '';
  @Input() codeHtml: string = '';
}
