import { Directive, input, effect, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[erbTransition]',
  standalone: true
})
export class TransitionDirective {
  isOpen = input<boolean | undefined>(false, { alias: 'erbTransition' });
  duration = input<number | undefined>(200);

  private timeoutId: any;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    effect(() => {
      if (typeof window !== 'undefined') {
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
        }

        if (this.isOpen()) {
          this.renderer.setStyle(this.el.nativeElement, 'display', '');

          // Small delay to allow the element to be mounted before triggering the transition
          this.timeoutId = setTimeout(() => {
            this.renderer.setAttribute(this.el.nativeElement, 'data-state', 'open');
          }, 10);
        } else {
          this.renderer.setAttribute(this.el.nativeElement, 'data-state', 'closed');

          this.timeoutId = setTimeout(() => {
            this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
          }, this.duration() ?? 200);
        }
      }
    });
  }
}
