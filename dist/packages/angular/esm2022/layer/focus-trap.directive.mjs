import { Directive, effect, input } from '@angular/core';
import * as i0 from "@angular/core";
const FOCUSABLE_ELEMENTS = [
    'a[href]',
    'area[href]',
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    'select:not([disabled]):not([aria-hidden])',
    'textarea:not([disabled]):not([aria-hidden])',
    'button:not([disabled]):not([aria-hidden])',
    'iframe',
    'object',
    'embed',
    '[contenteditable]',
    '[tabindex]:not([tabindex^="-"])'
].join(',');
export class FocusTrapDirective {
    el;
    active = input(true, { alias: 'erbFocusTrap' });
    previousFocus = null;
    handleKeyDownBound;
    constructor(el) {
        this.el = el;
        this.handleKeyDownBound = this.handleKeyDown.bind(this);
        effect(() => {
            if (this.active()) {
                this.activate();
            }
            else {
                this.deactivate();
            }
        });
    }
    ngOnInit() {
        if (this.active()) {
            this.activate();
        }
    }
    ngOnDestroy() {
        this.deactivate();
    }
    activate() {
        if (typeof window !== 'undefined') {
            if (!this.previousFocus) {
                this.previousFocus = document.activeElement;
            }
            // Ensure the container is focusable
            this.el.nativeElement.tabIndex = -1;
            // Focus first element or container
            setTimeout(() => {
                const focusableElements = Array.from(this.el.nativeElement.querySelectorAll(FOCUSABLE_ELEMENTS));
                if (focusableElements.length > 0 && focusableElements[0]) {
                    focusableElements[0].focus();
                }
                else {
                    this.el.nativeElement.focus();
                }
            });
            document.addEventListener('keydown', this.handleKeyDownBound);
        }
    }
    deactivate() {
        if (typeof window !== 'undefined') {
            document.removeEventListener('keydown', this.handleKeyDownBound);
            if (this.previousFocus) {
                this.previousFocus.focus();
                this.previousFocus = null;
            }
        }
    }
    handleKeyDown(e) {
        if (e.key !== 'Tab')
            return;
        const container = this.el.nativeElement;
        const focusableElements = Array.from(container.querySelectorAll(FOCUSABLE_ELEMENTS));
        if (focusableElements.length === 0) {
            e.preventDefault();
            return;
        }
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey) {
            if (firstElement && document.activeElement === firstElement) {
                e.preventDefault();
                if (lastElement)
                    lastElement.focus();
            }
        }
        else {
            if (lastElement && document.activeElement === lastElement) {
                e.preventDefault();
                if (firstElement)
                    firstElement.focus();
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FocusTrapDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: FocusTrapDirective, isStandalone: true, selector: "[erbFocusTrap]", inputs: { active: { classPropertyName: "active", publicName: "erbFocusTrap", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FocusTrapDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[erbFocusTrap]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmd1bGFyL3NyYy9sYXllci9mb2N1cy10cmFwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV4RixNQUFNLGtCQUFrQixHQUFHO0lBQ3pCLFNBQVM7SUFDVCxZQUFZO0lBQ1osK0RBQStEO0lBQy9ELDJDQUEyQztJQUMzQyw2Q0FBNkM7SUFDN0MsMkNBQTJDO0lBQzNDLFFBQVE7SUFDUixRQUFRO0lBQ1IsT0FBTztJQUNQLG1CQUFtQjtJQUNuQixpQ0FBaUM7Q0FDbEMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFNWixNQUFNLE9BQU8sa0JBQWtCO0lBT25CO0lBTlYsTUFBTSxHQUFHLEtBQUssQ0FBc0IsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFFN0QsYUFBYSxHQUF1QixJQUFJLENBQUM7SUFDekMsa0JBQWtCLENBQTZCO0lBRXZELFlBQ1UsRUFBMkI7UUFBM0IsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFFbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE1B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QUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN6QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7d0dBN0ZVLGtCQUFrQjs0RkFBbEIsa0JBQWtCOzs0RkFBbEIsa0JBQWtCO2tCQUo5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIGVmZmVjdCwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNvbnN0IEZPQ1VTQUJMRV9FTEVNRU5UUyA9IFtcclxuICAnYVtocmVmXScsXHJcbiAgJ2FyZWFbaHJlZl0nLFxyXG4gICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG4gICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsXHJcbiAgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG4gICdidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsXHJcbiAgJ2lmcmFtZScsXHJcbiAgJ29iamVjdCcsXHJcbiAgJ2VtYmVkJyxcclxuICAnW2NvbnRlbnRlZGl0YWJsZV0nLFxyXG4gICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSknXHJcbl0uam9pbignLCcpO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZXJiRm9jdXNUcmFwXScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9jdXNUcmFwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGFjdGl2ZSA9IGlucHV0PGJvb2xlYW4gfCB1bmRlZmluZWQ+KHRydWUsIHsgYWxpYXM6ICdlcmJGb2N1c1RyYXAnIH0pO1xyXG5cclxuICBwcml2YXRlIHByZXZpb3VzRm9jdXM6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBoYW5kbGVLZXlEb3duQm91bmQ6IChlOiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+XHJcbiAgKSB7XHJcbiAgICB0aGlzLmhhbmRsZUtleURvd25Cb3VuZCA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xyXG4gICAgZWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuYWN0aXZlKCkpIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmUoKSkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmF0ZSgpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBpZiAoIXRoaXMucHJldmlvdXNGb2N1cykge1xyXG4gICAgICAgICAgdGhpcy5wcmV2aW91c0ZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRW5zdXJlIHRoZSBjb250YWluZXIgaXMgZm9jdXNhYmxlXHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50YWJJbmRleCA9IC0xO1xyXG5cclxuICAgICAgLy8gRm9jdXMgZmlyc3QgZWxlbWVudCBvciBjb250YWluZXJcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBBcnJheS5mcm9tKFxyXG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KEZPQ1VTQUJMRV9FTEVNRU5UUylcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoID4gMCAmJiBmb2N1c2FibGVFbGVtZW50c1swXSkge1xyXG4gICAgICAgICAgZm9jdXNhYmxlRWxlbWVudHNbMF0uZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd25Cb3VuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlYWN0aXZhdGUoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bkJvdW5kKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzRm9jdXMpIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzRm9jdXMuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzRm9jdXMgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUtleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKGUua2V5ICE9PSAnVGFiJykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gQXJyYXkuZnJvbShcclxuICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KEZPQ1VTQUJMRV9FTEVNRU5UUylcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXJzdEVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1swXTtcclxuICAgIGNvbnN0IGxhc3RFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgaWYgKGZpcnN0RWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdEVsZW1lbnQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGxhc3RFbGVtZW50KSBsYXN0RWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobGFzdEVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdEVsZW1lbnQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGZpcnN0RWxlbWVudCkgZmlyc3RFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19