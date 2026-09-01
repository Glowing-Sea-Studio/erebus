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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWxvY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9zcmMvbGF5ZXIvc2Nyb2xsLWxvY2suZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQzs7QUFFcEUsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLElBQUksYUFBYSxHQUFrQixJQUFJLENBQUM7QUFDeEMsSUFBSSxlQUFlLEdBQWtCLElBQUksQ0FBQztBQUUxQyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtJQUM3QixPQUFPLE1BQU0sQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7QUFDbEUsQ0FBQyxDQUFDO0FBTUYsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixJQUFJLEdBQUcsS0FBSyxDQUFzQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUM1RCxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBRXZCO1FBQ0UsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxVQUFVO1FBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXO1lBQUUsT0FBTztRQUV6RCxJQUFJLGVBQWUsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUMxQixhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQzdDLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFFbkQsTUFBTSxjQUFjLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQztZQUUzQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3hDLElBQUksY0FBYyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsUUFBUSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksTUFBTSxjQUFjLEtBQUssQ0FBQztZQUMxSCxDQUFDO1FBQ0gsQ0FBQztRQUVELGVBQWUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVc7WUFBRSxPQUFPO1FBRTFELGVBQWUsRUFBRSxDQUFDO1FBQ2xCLElBQUksZUFBZSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQzFCLElBQUksYUFBYSxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1lBQy9DLENBQUM7aUJBQU0sQ0FBQztnQkFDTixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsQ0FBQztZQUVELElBQUksZUFBZSxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDO1lBQ3JELENBQUM7aUJBQU0sQ0FBQztnQkFDTixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdEQsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO3dHQXhEVSxtQkFBbUI7NEZBQW5CLG1CQUFtQjs7NEZBQW5CLG1CQUFtQjtrQkFKL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGlucHV0LCBlZmZlY3QsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxubGV0IHNjcm9sbExvY2tDb3VudCA9IDA7XHJcbmxldCBvcmlnaW5hbFN0eWxlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxubGV0IG9yaWdpbmFsUGFkZGluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG5jb25zdCBnZXRTY3JvbGxiYXJXaWR0aCA9ICgpID0+IHtcclxuICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlcmJTY3JvbGxMb2NrXScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsTG9ja0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgbG9jayA9IGlucHV0PGJvb2xlYW4gfCB1bmRlZmluZWQ+KHRydWUsIHsgYWxpYXM6ICdlcmJTY3JvbGxMb2NrJyB9KTtcclxuICBwcml2YXRlIGxvY2tlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxvY2soKSkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlTG9jaygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZUxvY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGlzYWJsZUxvY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW5hYmxlTG9jaygpIHtcclxuICAgIGlmICh0aGlzLmxvY2tlZCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgIGlmIChzY3JvbGxMb2NrQ291bnQgPT09IDApIHtcclxuICAgICAgb3JpZ2luYWxTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c7XHJcbiAgICAgIG9yaWdpbmFsUGFkZGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0O1xyXG5cclxuICAgICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxiYXJXaWR0aCgpO1xyXG5cclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICBpZiAoc2Nyb2xsYmFyV2lkdGggPiAwKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgY2FsYygke3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLnBhZGRpbmdSaWdodH0gKyAke3Njcm9sbGJhcldpZHRofXB4KWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxMb2NrQ291bnQrKztcclxuICAgIHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZUxvY2soKSB7XHJcbiAgICBpZiAoIXRoaXMubG9ja2VkIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgc2Nyb2xsTG9ja0NvdW50LS07XHJcbiAgICBpZiAoc2Nyb2xsTG9ja0NvdW50ID09PSAwKSB7XHJcbiAgICAgIGlmIChvcmlnaW5hbFN0eWxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IG9yaWdpbmFsU3R5bGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9yaWdpbmFsUGFkZGluZyAhPT0gbnVsbCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gb3JpZ2luYWxQYWRkaW5nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctcmlnaHQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==