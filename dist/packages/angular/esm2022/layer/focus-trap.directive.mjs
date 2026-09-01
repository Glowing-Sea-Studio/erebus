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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmd1bGFyL3NyYy9sYXllci9mb2N1cy10cmFwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV4RixNQUFNLGtCQUFrQixHQUFHO0lBQ3pCLFNBQVM7SUFDVCxZQUFZO0lBQ1osK0RBQStEO0lBQy9ELDJDQUEyQztJQUMzQyw2Q0FBNkM7SUFDN0MsMkNBQTJDO0lBQzNDLFFBQVE7SUFDUixRQUFRO0lBQ1IsT0FBTztJQUNQLG1CQUFtQjtJQUNuQixpQ0FBaUM7Q0FDbEMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFNWixNQUFNLE9BQU8sa0JBQWtCO0lBT25CO0lBTlYsTUFBTSxHQUFHLEtBQUssQ0FBc0IsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFFN0QsYUFBYSxHQUF1QixJQUFJLENBQUM7SUFDekMsa0JBQWtCLENBQTZCO0lBRXZELFlBQ1UsRUFBMkI7UUFBM0IsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFFbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE1B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QUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN6QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7d0dBN0ZVLGtCQUFrQjs0RkFBbEIsa0JBQWtCOzs0RkFBbEIsa0JBQWtCO2tCQUo5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIGVmZmVjdCwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgRk9DVVNBQkxFX0VMRU1FTlRTID0gW1xuICAnYVtocmVmXScsXG4gICdhcmVhW2hyZWZdJyxcbiAgJ2lucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3R5cGU9XCJoaWRkZW5cIl0pOm5vdChbYXJpYS1oaWRkZW5dKScsXG4gICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsXG4gICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJyxcbiAgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJyxcbiAgJ2lmcmFtZScsXG4gICdvYmplY3QnLFxuICAnZW1iZWQnLFxuICAnW2NvbnRlbnRlZGl0YWJsZV0nLFxuICAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJ1xuXS5qb2luKCcsJyk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tlcmJGb2N1c1RyYXBdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBGb2N1c1RyYXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGFjdGl2ZSA9IGlucHV0PGJvb2xlYW4gfCB1bmRlZmluZWQ+KHRydWUsIHsgYWxpYXM6ICdlcmJGb2N1c1RyYXAnIH0pO1xuICBcbiAgcHJpdmF0ZSBwcmV2aW91c0ZvY3VzOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGhhbmRsZUtleURvd25Cb3VuZDogKGU6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cbiAgKSB7XG4gICAgdGhpcy5oYW5kbGVLZXlEb3duQm91bmQgPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlKCkpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUoKSkge1xuICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhY3RpdmF0ZSgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICghdGhpcy5wcmV2aW91c0ZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c0ZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gRW5zdXJlIHRoZSBjb250YWluZXIgaXMgZm9jdXNhYmxlXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGFiSW5kZXggPSAtMTtcbiAgICAgIFxuICAgICAgLy8gRm9jdXMgZmlyc3QgZWxlbWVudCBvciBjb250YWluZXJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KEZPQ1VTQUJMRV9FTEVNRU5UUylcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggPiAwICYmIGZvY3VzYWJsZUVsZW1lbnRzWzBdKSB7XG4gICAgICAgICAgZm9jdXNhYmxlRWxlbWVudHNbMF0uZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd25Cb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWFjdGl2YXRlKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bkJvdW5kKTtcbiAgICAgIFxuICAgICAgaWYgKHRoaXMucHJldmlvdXNGb2N1cykge1xuICAgICAgICB0aGlzLnByZXZpb3VzRm9jdXMuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0ZvY3VzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUtleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChlLmtleSAhPT0gJ1RhYicpIHJldHVybjtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IEFycmF5LmZyb20oXG4gICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oRk9DVVNBQkxFX0VMRU1FTlRTKVxuICAgICk7XG5cbiAgICBpZiAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG4gICAgY29uc3QgbGFzdEVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICBpZiAoZmlyc3RFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGZpcnN0RWxlbWVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChsYXN0RWxlbWVudCkgbGFzdEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGxhc3RFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RFbGVtZW50KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGZpcnN0RWxlbWVudCkgZmlyc3RFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=