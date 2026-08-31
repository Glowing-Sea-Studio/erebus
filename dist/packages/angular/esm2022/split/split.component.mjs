import { Component, input, computed } from '@angular/core';
import { resolveResponsiveProps } from '../utils';
import * as i0 from "@angular/core";
export class SplitComponent {
    gap = input();
    fraction = input('1/2');
    align = input();
    customStyle = computed(() => {
        return {
            ...resolveResponsiveProps('--erb-split-gap', this.gap(), (v) => `var(--erb-space-${v})`),
            ...resolveResponsiveProps('--erb-split-align', this.align())
        };
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SplitComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: SplitComponent, isStandalone: true, selector: "erb-split", inputs: { gap: { classPropertyName: "gap", publicName: "gap", isSignal: true, isRequired: false, transformFunction: null }, fraction: { classPropertyName: "fraction", publicName: "fraction", isSignal: true, isRequired: false, transformFunction: null }, align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-split": "true", "attr.data-fraction": "fraction() !== \"1/2\" ? fraction() : undefined", "style": "customStyle()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SplitComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-split',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-split]': 'true',
                        '[attr.data-fraction]': 'fraction() !== "1/2" ? fraction() : undefined',
                        '[style]': 'customStyle()'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9zcmMvc3BsaXQvc3BsaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRyxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sVUFBVSxDQUFDOztBQWFuRSxNQUFNLE9BQU8sY0FBYztJQUN6QixHQUFHLEdBQUcsS0FBSyxFQUEyQixDQUFDO0lBQ3ZDLFFBQVEsR0FBRyxLQUFLLENBQW9FLEtBQUssQ0FBQyxDQUFDO0lBQzNGLEtBQUssR0FBRyxLQUFLLEVBQTJELENBQUM7SUFFekUsV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDMUIsT0FBTztZQUNMLEdBQUcsc0JBQXNCLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUM7WUFDeEYsR0FBRyxzQkFBc0IsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDN0QsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO3dHQVZRLGNBQWM7NEZBQWQsY0FBYyxvbEJBUmYsMkJBQTJCOzs0RkFRMUIsY0FBYztrQkFYMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSwyQkFBMkI7b0JBRXJDLElBQUksRUFBRTt3QkFDSixtQkFBbUIsRUFBRSxNQUFNO3dCQUMzQixzQkFBc0IsRUFBRSwrQ0FBK0M7d0JBQ3ZFLFNBQVMsRUFBRSxlQUFlO3FCQUMzQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICBDb21wb25lbnQsIGlucHV0LCBjb21wdXRlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZhbHVlLCByZXNvbHZlUmVzcG9uc2l2ZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcmItc3BsaXQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZXJiLXNwbGl0XSc6ICd0cnVlJyxcbiAgICAnW2F0dHIuZGF0YS1mcmFjdGlvbl0nOiAnZnJhY3Rpb24oKSAhPT0gXCIxLzJcIiA/IGZyYWN0aW9uKCkgOiB1bmRlZmluZWQnLFxuICAgICdbc3R5bGVdJzogJ2N1c3RvbVN0eWxlKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgU3BsaXRDb21wb25lbnQge1xuICBnYXAgPSBpbnB1dDxSZXNwb25zaXZlVmFsdWU8bnVtYmVyPj4oKTtcbiAgZnJhY3Rpb24gPSBpbnB1dDwnMS8yJyB8ICcxLzMnIHwgJzIvMycgfCAnMS80JyB8ICczLzQnIHwgJ2F1dG8tc3RhcnQnIHwgJ2F1dG8tZW5kJz4oJzEvMicpO1xuICBhbGlnbiA9IGlucHV0PFJlc3BvbnNpdmVWYWx1ZTwnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdzdHJldGNoJz4+KCk7XG5cbiAgY3VzdG9tU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc29sdmVSZXNwb25zaXZlUHJvcHMoJy0tZXJiLXNwbGl0LWdhcCcsIHRoaXMuZ2FwKCksICh2KSA9PiBgdmFyKC0tZXJiLXNwYWNlLSR7dn0pYCksXG4gICAgICAuLi5yZXNvbHZlUmVzcG9uc2l2ZVByb3BzKCctLWVyYi1zcGxpdC1hbGlnbicsIHRoaXMuYWxpZ24oKSlcbiAgICB9O1xuICB9KTtcbn1cbiJdfQ==