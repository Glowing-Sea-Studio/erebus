import { Directive, input, effect } from '@angular/core';
import * as i0 from "@angular/core";
export class TransitionDirective {
    el;
    renderer;
    isOpen = input(false, { alias: 'erbTransition' });
    duration = input(200);
    timeoutId;
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
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
                }
                else {
                    this.renderer.setAttribute(this.el.nativeElement, 'data-state', 'closed');
                    this.timeoutId = setTimeout(() => {
                        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
                    }, this.duration() ?? 200);
                }
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TransitionDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: TransitionDirective, isStandalone: true, selector: "[erbTransition]", inputs: { isOpen: { classPropertyName: "isOpen", publicName: "erbTransition", isSignal: true, isRequired: false, transformFunction: null }, duration: { classPropertyName: "duration", publicName: "duration", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TransitionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[erbTransition]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmd1bGFyL3NyYy9sYXllci90cmFuc2l0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXlCLE1BQU0sZUFBZSxDQUFDOztBQU1oRixNQUFNLE9BQU8sbUJBQW1CO0lBT3BCO0lBQ0E7SUFQVixNQUFNLEdBQUcsS0FBSyxDQUFzQixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUN2RSxRQUFRLEdBQUcsS0FBSyxDQUFxQixHQUFHLENBQUMsQ0FBQztJQUVsQyxTQUFTLENBQU07SUFFdkIsWUFDVSxFQUEyQixFQUMzQixRQUFtQjtRQURuQixPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBRTNCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDO2dCQUNsQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDbkIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBRTdELGtGQUFrRjtvQkFDbEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO3dCQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDO3FCQUFNLENBQUM7b0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUUxRSxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7d0JBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDbkUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7d0dBaENVLG1CQUFtQjs0RkFBbkIsbUJBQW1COzs0RkFBbkIsbUJBQW1CO2tCQUovQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgaW5wdXQsIGVmZmVjdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tlcmJUcmFuc2l0aW9uXScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbkRpcmVjdGl2ZSB7XG4gIGlzT3BlbiA9IGlucHV0PGJvb2xlYW4gfCB1bmRlZmluZWQ+KGZhbHNlLCB7IGFsaWFzOiAnZXJiVHJhbnNpdGlvbicgfSk7XG4gIGR1cmF0aW9uID0gaW5wdXQ8bnVtYmVyIHwgdW5kZWZpbmVkPigyMDApO1xuXG4gIHByaXZhdGUgdGltZW91dElkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZW91dElkKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJycpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFNtYWxsIGRlbGF5IHRvIGFsbG93IHRoZSBlbGVtZW50IHRvIGJlIG1vdW50ZWQgYmVmb3JlIHRyaWdnZXJpbmcgdGhlIHRyYW5zaXRpb25cbiAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGF0YS1zdGF0ZScsICdvcGVuJyk7XG4gICAgICAgICAgfSwgMTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2RhdGEtc3RhdGUnLCAnY2xvc2VkJyk7XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgfSwgdGhpcy5kdXJhdGlvbigpID8/IDIwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19