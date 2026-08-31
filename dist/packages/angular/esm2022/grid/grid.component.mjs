import { Component, input, computed } from '@angular/core';
import { resolveResponsiveProps } from '../utils';
import * as i0 from "@angular/core";
export class GridComponent {
    cols = input(1);
    gap = input();
    align = input();
    justify = input();
    customStyle = computed(() => {
        return {
            ...resolveResponsiveProps('--erb-grid-cols', this.cols(), (v) => `repeat(${v}, minmax(0, 1fr))`),
            ...resolveResponsiveProps('--erb-grid-gap', this.gap(), (v) => `var(--erb-space-${v})`),
            ...resolveResponsiveProps('--erb-grid-align', this.align()),
            ...resolveResponsiveProps('--erb-grid-justify', this.justify())
        };
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GridComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: GridComponent, isStandalone: true, selector: "erb-grid", inputs: { cols: { classPropertyName: "cols", publicName: "cols", isSignal: true, isRequired: false, transformFunction: null }, gap: { classPropertyName: "gap", publicName: "gap", isSignal: true, isRequired: false, transformFunction: null }, align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, justify: { classPropertyName: "justify", publicName: "justify", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-grid": "true", "style": "customStyle()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GridComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-grid',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-grid]': 'true',
                        '[style]': 'customStyle()'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmd1bGFyL3NyYy9ncmlkL2dyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRyxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sVUFBVSxDQUFDOztBQVluRSxNQUFNLE9BQU8sYUFBYTtJQUN4QixJQUFJLEdBQUcsS0FBSyxDQUEwQixDQUFDLENBQUMsQ0FBQztJQUN6QyxHQUFHLEdBQUcsS0FBSyxFQUEyQixDQUFDO0lBQ3ZDLEtBQUssR0FBRyxLQUFLLEVBQTJELENBQUM7SUFDekUsT0FBTyxHQUFHLEtBQUssRUFBMkQsQ0FBQztJQUUzRSxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUMxQixPQUFPO1lBQ0wsR0FBRyxzQkFBc0IsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNoRyxHQUFHLHNCQUFzQixDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDO1lBQ3ZGLEdBQUcsc0JBQXNCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNELEdBQUcsc0JBQXNCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hFLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQzt3R0FiUSxhQUFhOzRGQUFiLGFBQWEsMm5CQVBkLDJCQUEyQjs7NEZBTzFCLGFBQWE7a0JBVnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsMkJBQTJCO29CQUVyQyxJQUFJLEVBQUU7d0JBQ0osa0JBQWtCLEVBQUUsTUFBTTt3QkFDMUIsU0FBUyxFQUFFLGVBQWU7cUJBQzNCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIENvbXBvbmVudCwgaW5wdXQsIGNvbXB1dGVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zaXZlVmFsdWUsIHJlc29sdmVSZXNwb25zaXZlUHJvcHMgfSBmcm9tICcuLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VyYi1ncmlkJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmVyYi1ncmlkXSc6ICd0cnVlJyxcbiAgICAnW3N0eWxlXSc6ICdjdXN0b21TdHlsZSgpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQge1xuICBjb2xzID0gaW5wdXQ8UmVzcG9uc2l2ZVZhbHVlPG51bWJlcj4+KDEpO1xuICBnYXAgPSBpbnB1dDxSZXNwb25zaXZlVmFsdWU8bnVtYmVyPj4oKTtcbiAgYWxpZ24gPSBpbnB1dDxSZXNwb25zaXZlVmFsdWU8J3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnc3RyZXRjaCc+PigpO1xuICBqdXN0aWZ5ID0gaW5wdXQ8UmVzcG9uc2l2ZVZhbHVlPCdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ3N0cmV0Y2gnPj4oKTtcblxuICBjdXN0b21TdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzb2x2ZVJlc3BvbnNpdmVQcm9wcygnLS1lcmItZ3JpZC1jb2xzJywgdGhpcy5jb2xzKCksICh2KSA9PiBgcmVwZWF0KCR7dn0sIG1pbm1heCgwLCAxZnIpKWApLFxuICAgICAgLi4ucmVzb2x2ZVJlc3BvbnNpdmVQcm9wcygnLS1lcmItZ3JpZC1nYXAnLCB0aGlzLmdhcCgpLCAodikgPT4gYHZhcigtLWVyYi1zcGFjZS0ke3Z9KWApLFxuICAgICAgLi4ucmVzb2x2ZVJlc3BvbnNpdmVQcm9wcygnLS1lcmItZ3JpZC1hbGlnbicsIHRoaXMuYWxpZ24oKSksXG4gICAgICAuLi5yZXNvbHZlUmVzcG9uc2l2ZVByb3BzKCctLWVyYi1ncmlkLWp1c3RpZnknLCB0aGlzLmp1c3RpZnkoKSlcbiAgICB9O1xuICB9KTtcbn1cbiJdfQ==