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
export class InlineComponent {
    gap = input();
    align = input();
    justify = input();
    customStyle = computed(() => {
        return {
            ...resolveResponsiveProps('--erb-inline-gap', this.gap(), (v) => `var(--erb-space-${v})`),
            ...resolveResponsiveProps('--erb-inline-align', this.align(), (v) => alignMap[v] || v),
            ...resolveResponsiveProps('--erb-inline-justify', this.justify(), (v) => justifyMap[v] || v)
        };
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InlineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: InlineComponent, isStandalone: true, selector: "erb-inline", inputs: { gap: { classPropertyName: "gap", publicName: "gap", isSignal: true, isRequired: false, transformFunction: null }, align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, justify: { classPropertyName: "justify", publicName: "justify", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-inline": "true", "style": "customStyle()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InlineComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-inline',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-inline]': 'true',
                        '[style]': 'customStyle()'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuZ3VsYXIvc3JjL2lubGluZS9pbmxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRyxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUVuRSxNQUFNLFVBQVUsR0FBMkI7SUFDekMsS0FBSyxFQUFFLFlBQVk7SUFDbkIsR0FBRyxFQUFFLFVBQVU7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixlQUFlLEVBQUUsZUFBZTtJQUNoQyxjQUFjLEVBQUUsY0FBYztJQUM5QixjQUFjLEVBQUUsY0FBYztDQUMvQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQTJCO0lBQ3ZDLEtBQUssRUFBRSxZQUFZO0lBQ25CLEdBQUcsRUFBRSxVQUFVO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsUUFBUSxFQUFFLFVBQVU7Q0FDckIsQ0FBQztBQVlGLE1BQU0sT0FBTyxlQUFlO0lBQzFCLEdBQUcsR0FBRyxLQUFLLEVBQTJCLENBQUM7SUFDdkMsS0FBSyxHQUFHLEtBQUssRUFBd0UsQ0FBQztJQUN0RixPQUFPLEdBQUcsS0FBSyxFQUFtRyxDQUFDO0lBRW5ILFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1FBQzFCLE9BQU87WUFDTCxHQUFHLHNCQUFzQixDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDO1lBQ3pGLEdBQUcsc0JBQXNCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hHLEdBQUcsc0JBQXNCLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZHLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQzt3R0FYUSxlQUFlOzRGQUFmLGVBQWUsMGdCQVBoQiwyQkFBMkI7OzRGQU8xQixlQUFlO2tCQVYzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLDJCQUEyQjtvQkFFckMsSUFBSSxFQUFFO3dCQUNKLG9CQUFvQixFQUFFLE1BQU07d0JBQzVCLFNBQVMsRUFBRSxlQUFlO3FCQUMzQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICBDb21wb25lbnQsIGlucHV0LCBjb21wdXRlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZhbHVlLCByZXNvbHZlUmVzcG9uc2l2ZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBqdXN0aWZ5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gIGNlbnRlcjogJ2NlbnRlcicsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ3NwYWNlLWJldHdlZW4nLFxuICAnc3BhY2UtYXJvdW5kJzogJ3NwYWNlLWFyb3VuZCcsXG4gICdzcGFjZS1ldmVubHknOiAnc3BhY2UtZXZlbmx5J1xufTtcblxuY29uc3QgYWxpZ25NYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHN0YXJ0OiAnZmxleC1zdGFydCcsXG4gIGVuZDogJ2ZsZXgtZW5kJyxcbiAgY2VudGVyOiAnY2VudGVyJyxcbiAgc3RyZXRjaDogJ3N0cmV0Y2gnLFxuICBiYXNlbGluZTogJ2Jhc2VsaW5lJ1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXJiLWlubGluZScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5lcmItaW5saW5lXSc6ICd0cnVlJyxcbiAgICAnW3N0eWxlXSc6ICdjdXN0b21TdHlsZSgpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIElubGluZUNvbXBvbmVudCB7XG4gIGdhcCA9IGlucHV0PFJlc3BvbnNpdmVWYWx1ZTxudW1iZXI+PigpO1xuICBhbGlnbiA9IGlucHV0PFJlc3BvbnNpdmVWYWx1ZTwnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdzdHJldGNoJyB8ICdiYXNlbGluZSc+PigpO1xuICBqdXN0aWZ5ID0gaW5wdXQ8UmVzcG9uc2l2ZVZhbHVlPCdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ3NwYWNlLWJldHdlZW4nIHwgJ3NwYWNlLWFyb3VuZCcgfCAnc3BhY2UtZXZlbmx5Jz4+KCk7XG5cbiAgY3VzdG9tU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc29sdmVSZXNwb25zaXZlUHJvcHMoJy0tZXJiLWlubGluZS1nYXAnLCB0aGlzLmdhcCgpLCAodikgPT4gYHZhcigtLWVyYi1zcGFjZS0ke3Z9KWApLFxuICAgICAgLi4ucmVzb2x2ZVJlc3BvbnNpdmVQcm9wcygnLS1lcmItaW5saW5lLWFsaWduJywgdGhpcy5hbGlnbigpLCAodikgPT4gYWxpZ25NYXBbdiBhcyBzdHJpbmddIHx8IHYpLFxuICAgICAgLi4ucmVzb2x2ZVJlc3BvbnNpdmVQcm9wcygnLS1lcmItaW5saW5lLWp1c3RpZnknLCB0aGlzLmp1c3RpZnkoKSwgKHYpID0+IGp1c3RpZnlNYXBbdiBhcyBzdHJpbmddIHx8IHYpXG4gICAgfTtcbiAgfSk7XG59XG4iXX0=