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
export class StackComponent {
    gap = input();
    align = input();
    justify = input();
    customStyle = computed(() => {
        return {
            ...resolveResponsiveProps('--erb-stack-gap', this.gap(), (v) => `var(--erb-space-${v})`),
            ...resolveResponsiveProps('--erb-stack-align', this.align(), (v) => alignMap[v] || v),
            ...resolveResponsiveProps('--erb-stack-justify', this.justify(), (v) => justifyMap[v] || v)
        };
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: StackComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: StackComponent, isStandalone: true, selector: "erb-stack", inputs: { gap: { classPropertyName: "gap", publicName: "gap", isSignal: true, isRequired: false, transformFunction: null }, align: { classPropertyName: "align", publicName: "align", isSignal: true, isRequired: false, transformFunction: null }, justify: { classPropertyName: "justify", publicName: "justify", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-stack": "true", "style": "customStyle()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: StackComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-stack',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-stack]': 'true',
                        '[style]': 'customStyle()'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9zcmMvc3RhY2svc3RhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRyxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUVuRSxNQUFNLFVBQVUsR0FBMkI7SUFDekMsS0FBSyxFQUFFLFlBQVk7SUFDbkIsR0FBRyxFQUFFLFVBQVU7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixlQUFlLEVBQUUsZUFBZTtJQUNoQyxjQUFjLEVBQUUsY0FBYztJQUM5QixjQUFjLEVBQUUsY0FBYztDQUMvQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQTJCO0lBQ3ZDLEtBQUssRUFBRSxZQUFZO0lBQ25CLEdBQUcsRUFBRSxVQUFVO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsUUFBUSxFQUFFLFVBQVU7Q0FDckIsQ0FBQztBQVlGLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLEdBQUcsR0FBRyxLQUFLLEVBQTJCLENBQUM7SUFDdkMsS0FBSyxHQUFHLEtBQUssRUFBd0UsQ0FBQztJQUN0RixPQUFPLEdBQUcsS0FBSyxFQUFtRyxDQUFDO0lBRW5ILFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1FBQzFCLE9BQU87WUFDTCxHQUFHLHNCQUFzQixDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDO1lBQ3hGLEdBQUcsc0JBQXNCLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9GLEdBQUcsc0JBQXNCLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RHLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQzt3R0FYUSxjQUFjOzRGQUFkLGNBQWMsd2dCQVBmLDJCQUEyQjs7NEZBTzFCLGNBQWM7a0JBVjFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsMkJBQTJCO29CQUVyQyxJQUFJLEVBQUU7d0JBQ0osbUJBQW1CLEVBQUUsTUFBTTt3QkFDM0IsU0FBUyxFQUFFLGVBQWU7cUJBQzNCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIENvbXBvbmVudCwgaW5wdXQsIGNvbXB1dGVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zaXZlVmFsdWUsIHJlc29sdmVSZXNwb25zaXZlUHJvcHMgfSBmcm9tICcuLi91dGlscyc7XG5cbmNvbnN0IGp1c3RpZnlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHN0YXJ0OiAnZmxleC1zdGFydCcsXG4gIGVuZDogJ2ZsZXgtZW5kJyxcbiAgY2VudGVyOiAnY2VudGVyJyxcbiAgJ3NwYWNlLWJldHdlZW4nOiAnc3BhY2UtYmV0d2VlbicsXG4gICdzcGFjZS1hcm91bmQnOiAnc3BhY2UtYXJvdW5kJyxcbiAgJ3NwYWNlLWV2ZW5seSc6ICdzcGFjZS1ldmVubHknXG59O1xuXG5jb25zdCBhbGlnbk1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgc3RhcnQ6ICdmbGV4LXN0YXJ0JyxcbiAgZW5kOiAnZmxleC1lbmQnLFxuICBjZW50ZXI6ICdjZW50ZXInLFxuICBzdHJldGNoOiAnc3RyZXRjaCcsXG4gIGJhc2VsaW5lOiAnYmFzZWxpbmUnXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcmItc3RhY2snLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZXJiLXN0YWNrXSc6ICd0cnVlJyxcbiAgICAnW3N0eWxlXSc6ICdjdXN0b21TdHlsZSgpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFN0YWNrQ29tcG9uZW50IHtcbiAgZ2FwID0gaW5wdXQ8UmVzcG9uc2l2ZVZhbHVlPG51bWJlcj4+KCk7XG4gIGFsaWduID0gaW5wdXQ8UmVzcG9uc2l2ZVZhbHVlPCdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ3N0cmV0Y2gnIHwgJ2Jhc2VsaW5lJz4+KCk7XG4gIGp1c3RpZnkgPSBpbnB1dDxSZXNwb25zaXZlVmFsdWU8J3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnc3BhY2UtYmV0d2VlbicgfCAnc3BhY2UtYXJvdW5kJyB8ICdzcGFjZS1ldmVubHknPj4oKTtcblxuICBjdXN0b21TdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzb2x2ZVJlc3BvbnNpdmVQcm9wcygnLS1lcmItc3RhY2stZ2FwJywgdGhpcy5nYXAoKSwgKHYpID0+IGB2YXIoLS1lcmItc3BhY2UtJHt2fSlgKSxcbiAgICAgIC4uLnJlc29sdmVSZXNwb25zaXZlUHJvcHMoJy0tZXJiLXN0YWNrLWFsaWduJywgdGhpcy5hbGlnbigpLCAodikgPT4gYWxpZ25NYXBbdiBhcyBzdHJpbmddIHx8IHYpLFxuICAgICAgLi4ucmVzb2x2ZVJlc3BvbnNpdmVQcm9wcygnLS1lcmItc3RhY2stanVzdGlmeScsIHRoaXMuanVzdGlmeSgpLCAodikgPT4ganVzdGlmeU1hcFt2IGFzIHN0cmluZ10gfHwgdilcbiAgICB9O1xuICB9KTtcbn1cbiJdfQ==