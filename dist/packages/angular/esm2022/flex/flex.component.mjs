import { Component, input, computed } from '@angular/core';
import { resolveResponsiveProps } from '../utils';
import * as i0 from "@angular/core";
const justifyMap = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    'space-between': 'space-between',
    'space-around': 'space-around',
    'space-evenly': 'space-evenly'
};
const alignMap = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch',
    baseline: 'baseline'
};
export class FlexComponent {
    direction = input();
    gap = input();
    align = input();
    justify = input();
    wrap = input();
    customStyle = computed(() => {
        return {
            ...resolveResponsiveProps('--erb-flex-direction', this.direction()),
            ...resolveResponsiveProps('--erb-flex-gap', this.gap(), (v) => `var(--erb-space-${v})`),
            ...resolveResponsiveProps('--erb-flex-align', this.align(), (v) => alignMap[v] || v),
            ...resolveResponsiveProps('--erb-flex-justify', this.justify(), (v) => justifyMap[v] || v),
            ...resolveResponsiveProps('--erb-flex-wrap', this.wrap())
        };
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FlexComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: FlexComponent, isStandalone: true, selector: "erb-flex", inputs: { direction: { classPropertyName: "direction", publicName: "direction", isSignal: true, isRequired: false, transformFunction: null }, gap: { classPropertyName: "gap", publicName: "gap", isSignal: true, isRequired: false, transformFunction: null }, align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, justify: { classPropertyName: "justify", publicName: "justify", isSignal: true, isRequired: false, transformFunction: null }, wrap: { classPropertyName: "wrap", publicName: "wrap", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-flex": "true", "style": "customStyle()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FlexComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-flex',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-flex]': 'true',
                        '[style]': 'customStyle()'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmd1bGFyL3NyYy9mbGV4L2ZsZXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRyxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUVuRSxNQUFNLFVBQVUsR0FBMkI7SUFDekMsS0FBSyxFQUFFLFlBQVk7SUFDbkIsR0FBRyxFQUFFLFVBQVU7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixlQUFlLEVBQUUsZUFBZTtJQUNoQyxjQUFjLEVBQUUsY0FBYztJQUM5QixjQUFjLEVBQUUsY0FBYztDQUMvQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQTJCO0lBQ3ZDLEtBQUssRUFBRSxZQUFZO0lBQ25CLEdBQUcsRUFBRSxVQUFVO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsUUFBUSxFQUFFLFVBQVU7Q0FDckIsQ0FBQztBQVlGLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFNBQVMsR0FBRyxLQUFLLEVBQXdFLENBQUM7SUFDMUYsR0FBRyxHQUFHLEtBQUssRUFBMkIsQ0FBQztJQUN2QyxLQUFLLEdBQUcsS0FBSyxFQUF3RSxDQUFDO0lBQ3RGLE9BQU8sR0FBRyxLQUFLLEVBQW1HLENBQUM7SUFDbkgsSUFBSSxHQUFHLEtBQUssRUFBdUQsQ0FBQztJQUVwRSxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUMxQixPQUFPO1lBQ0wsR0FBRyxzQkFBc0IsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkUsR0FBRyxzQkFBc0IsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQztZQUN2RixHQUFHLHNCQUFzQixDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5RixHQUFHLHNCQUFzQixDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwRyxHQUFHLHNCQUFzQixDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxRCxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7d0dBZlEsYUFBYTs0RkFBYixhQUFhLCt2QkFQZCwyQkFBMkI7OzRGQU8xQixhQUFhO2tCQVZ6QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLDJCQUEyQjtvQkFFckMsSUFBSSxFQUFFO3dCQUNKLGtCQUFrQixFQUFFLE1BQU07d0JBQzFCLFNBQVMsRUFBRSxlQUFlO3FCQUMzQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICBDb21wb25lbnQsIGlucHV0LCBjb21wdXRlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZhbHVlLCByZXNvbHZlUmVzcG9uc2l2ZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBqdXN0aWZ5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gIGNlbnRlcjogJ2NlbnRlcicsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ3NwYWNlLWJldHdlZW4nLFxuICAnc3BhY2UtYXJvdW5kJzogJ3NwYWNlLWFyb3VuZCcsXG4gICdzcGFjZS1ldmVubHknOiAnc3BhY2UtZXZlbmx5J1xufTtcblxuY29uc3QgYWxpZ25NYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHN0YXJ0OiAnZmxleC1zdGFydCcsXG4gIGVuZDogJ2ZsZXgtZW5kJyxcbiAgY2VudGVyOiAnY2VudGVyJyxcbiAgc3RyZXRjaDogJ3N0cmV0Y2gnLFxuICBiYXNlbGluZTogJ2Jhc2VsaW5lJ1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXJiLWZsZXgnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZXJiLWZsZXhdJzogJ3RydWUnLFxuICAgICdbc3R5bGVdJzogJ2N1c3RvbVN0eWxlKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRmxleENvbXBvbmVudCB7XG4gIGRpcmVjdGlvbiA9IGlucHV0PFJlc3BvbnNpdmVWYWx1ZTwncm93JyB8ICdyb3ctcmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW4tcmV2ZXJzZSc+PigpO1xuICBnYXAgPSBpbnB1dDxSZXNwb25zaXZlVmFsdWU8bnVtYmVyPj4oKTtcbiAgYWxpZ24gPSBpbnB1dDxSZXNwb25zaXZlVmFsdWU8J3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnc3RyZXRjaCcgfCAnYmFzZWxpbmUnPj4oKTtcbiAganVzdGlmeSA9IGlucHV0PFJlc3BvbnNpdmVWYWx1ZTwnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdzcGFjZS1iZXR3ZWVuJyB8ICdzcGFjZS1hcm91bmQnIHwgJ3NwYWNlLWV2ZW5seSc+PigpO1xuICB3cmFwID0gaW5wdXQ8UmVzcG9uc2l2ZVZhbHVlPCdub3dyYXAnIHwgJ3dyYXAnIHwgJ3dyYXAtcmV2ZXJzZSc+PigpO1xuXG4gIGN1c3RvbVN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXNvbHZlUmVzcG9uc2l2ZVByb3BzKCctLWVyYi1mbGV4LWRpcmVjdGlvbicsIHRoaXMuZGlyZWN0aW9uKCkpLFxuICAgICAgLi4ucmVzb2x2ZVJlc3BvbnNpdmVQcm9wcygnLS1lcmItZmxleC1nYXAnLCB0aGlzLmdhcCgpLCAodikgPT4gYHZhcigtLWVyYi1zcGFjZS0ke3Z9KWApLFxuICAgICAgLi4ucmVzb2x2ZVJlc3BvbnNpdmVQcm9wcygnLS1lcmItZmxleC1hbGlnbicsIHRoaXMuYWxpZ24oKSwgKHYpID0+IGFsaWduTWFwW3YgYXMgc3RyaW5nXSB8fCB2KSxcbiAgICAgIC4uLnJlc29sdmVSZXNwb25zaXZlUHJvcHMoJy0tZXJiLWZsZXgtanVzdGlmeScsIHRoaXMuanVzdGlmeSgpLCAodikgPT4ganVzdGlmeU1hcFt2IGFzIHN0cmluZ10gfHwgdiksXG4gICAgICAuLi5yZXNvbHZlUmVzcG9uc2l2ZVByb3BzKCctLWVyYi1mbGV4LXdyYXAnLCB0aGlzLndyYXAoKSlcbiAgICB9O1xuICB9KTtcbn1cbiJdfQ==