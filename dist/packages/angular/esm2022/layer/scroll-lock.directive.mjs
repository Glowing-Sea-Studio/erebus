import { Directive, input, effect } from '@angular/core';
import * as i0 from "@angular/core";
let scrollLockCount = 0;
let originalStyle = null;
let originalPadding = null;
const getScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth;
};
export class ScrollLockDirective {
    lock = input(true, { alias: 'erbScrollLock' });
    locked = false;
    constructor() {
        effect(() => {
            if (this.lock()) {
                this.enableLock();
            }
            else {
                this.disableLock();
            }
        });
    }
    ngOnDestroy() {
        this.disableLock();
    }
    enableLock() {
        if (this.locked || typeof window === 'undefined')
            return;
        if (scrollLockCount === 0) {
            originalStyle = document.body.style.overflow;
            originalPadding = document.body.style.paddingRight;
            const scrollbarWidth = getScrollbarWidth();
            document.body.style.overflow = 'hidden';
            if (scrollbarWidth > 0) {
                document.body.style.paddingRight = `calc(${window.getComputedStyle(document.body).paddingRight} + ${scrollbarWidth}px)`;
            }
        }
        scrollLockCount++;
        this.locked = true;
    }
    disableLock() {
        if (!this.locked || typeof window === 'undefined')
            return;
        scrollLockCount--;
        if (scrollLockCount === 0) {
            if (originalStyle !== null) {
                document.body.style.overflow = originalStyle;
            }
            else {
                document.body.style.removeProperty('overflow');
            }
            if (originalPadding !== null) {
                document.body.style.paddingRight = originalPadding;
            }
            else {
                document.body.style.removeProperty('padding-right');
            }
        }
        this.locked = false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ScrollLockDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: ScrollLockDirective, isStandalone: true, selector: "[erbScrollLock]", inputs: { lock: { classPropertyName: "lock", publicName: "erbScrollLock", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ScrollLockDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[erbScrollLock]',
                    standalone: true
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWxvY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9zcmMvbGF5ZXIvc2Nyb2xsLWxvY2suZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQzs7QUFFcEUsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLElBQUksYUFBYSxHQUFrQixJQUFJLENBQUM7QUFDeEMsSUFBSSxlQUFlLEdBQWtCLElBQUksQ0FBQztBQUUxQyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtJQUM3QixPQUFPLE1BQU0sQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDbEUsQ0FBQyxDQUFDO0FBTUYsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixJQUFJLEdBQUcsS0FBSyxDQUFzQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUM1RCxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBRXZCO1FBQ0UsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxVQUFVO1FBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXO1lBQUUsT0FBTztRQUV6RCxJQUFJLGVBQWUsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUMxQixhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQzdDLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFFbkQsTUFBTSxjQUFjLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQztZQUUzQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3hDLElBQUksY0FBYyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsUUFBUSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksTUFBTSxjQUFjLEtBQUssQ0FBQztZQUMxSCxDQUFDO1FBQ0gsQ0FBQztRQUVELGVBQWUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVc7WUFBRSxPQUFPO1FBRTFELGVBQWUsRUFBRSxDQUFDO1FBQ2xCLElBQUksZUFBZSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQzFCLElBQUksYUFBYSxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1lBQy9DLENBQUM7aUJBQU0sQ0FBQztnQkFDTixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsQ0FBQztZQUVELElBQUksZUFBZSxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDO1lBQ3JELENBQUM7aUJBQU0sQ0FBQztnQkFDTixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdEQsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO3dHQXhEVSxtQkFBbUI7NEZBQW5CLG1CQUFtQjs7NEZBQW5CLG1CQUFtQjtrQkFKL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGlucHV0LCBlZmZlY3QsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5sZXQgc2Nyb2xsTG9ja0NvdW50ID0gMDtcbmxldCBvcmlnaW5hbFN0eWxlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbmxldCBvcmlnaW5hbFBhZGRpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG5jb25zdCBnZXRTY3JvbGxiYXJXaWR0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2VyYlNjcm9sbExvY2tdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxMb2NrRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgbG9jayA9IGlucHV0PGJvb2xlYW4gfCB1bmRlZmluZWQ+KHRydWUsIHsgYWxpYXM6ICdlcmJTY3JvbGxMb2NrJyB9KTtcbiAgcHJpdmF0ZSBsb2NrZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubG9jaygpKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlTG9jaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlTG9jaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kaXNhYmxlTG9jaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbmFibGVMb2NrKCkge1xuICAgIGlmICh0aGlzLmxvY2tlZCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgaWYgKHNjcm9sbExvY2tDb3VudCA9PT0gMCkge1xuICAgICAgb3JpZ2luYWxTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c7XG4gICAgICBvcmlnaW5hbFBhZGRpbmcgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodDtcblxuICAgICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxiYXJXaWR0aCgpO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICBpZiAoc2Nyb2xsYmFyV2lkdGggPiAwKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYGNhbGMoJHt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5wYWRkaW5nUmlnaHR9ICsgJHtzY3JvbGxiYXJXaWR0aH1weClgO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzY3JvbGxMb2NrQ291bnQrKztcbiAgICB0aGlzLmxvY2tlZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIGRpc2FibGVMb2NrKCkge1xuICAgIGlmICghdGhpcy5sb2NrZWQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgIHNjcm9sbExvY2tDb3VudC0tO1xuICAgIGlmIChzY3JvbGxMb2NrQ291bnQgPT09IDApIHtcbiAgICAgIGlmIChvcmlnaW5hbFN0eWxlICE9PSBudWxsKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBvcmlnaW5hbFN0eWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKG9yaWdpbmFsUGFkZGluZyAhPT0gbnVsbCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IG9yaWdpbmFsUGFkZGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcbiAgfVxufVxuIl19