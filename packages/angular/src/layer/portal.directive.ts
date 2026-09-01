import { Directive, input, TemplateRef, ViewContainerRef, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[erbPortal]',
  standalone: true
})
export class PortalDirective implements OnInit, OnDestroy {
  targetContainer = input<HTMLElement | null | undefined>(undefined, { alias: 'erbPortal' });

  private viewRef?: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const container = this.targetContainer() || document.body;

      this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef);

      const rootNodes = this.viewRef.rootNodes;
      for (const node of rootNodes) {
        container.appendChild(node);
      }
    }
  }

  ngOnDestroy() {
    if (this.viewRef) {
      const rootNodes = this.viewRef.rootNodes;
      for (const node of rootNodes) {
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
      }
      this.viewRef.destroy();
    }
  }
}
