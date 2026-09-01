import { Component, Input } from '@angular/core';

@Component({
  selector: 'erb-skip-link',
  template: `<a [href]="href" class="erb-skip-link"><ng-content></ng-content></a>`,
  styleUrls: ['../../../../core/src/components/skip-link.css'],
  standalone: true
})
export class SkipLinkComponent {
  @Input() href!: string;
}
