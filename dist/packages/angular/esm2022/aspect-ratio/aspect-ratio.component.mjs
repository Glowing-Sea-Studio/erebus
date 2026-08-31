import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
export class AspectRatioComponent {
    ratio = input(4 / 3);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AspectRatioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: AspectRatioComponent, isStandalone: true, selector: "erb-aspect-ratio", inputs: { ratio: { classPropertyName: "ratio", publicName: "ratio", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-aspect-ratio": "true", "style.--erb-aspect-ratio": "ratio()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AspectRatioComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-aspect-ratio',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-aspect-ratio]': 'true',
                        '[style.--erb-aspect-ratio]': 'ratio()'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNwZWN0LXJhdGlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuZ3VsYXIvc3JjL2FzcGVjdC1yYXRpby9hc3BlY3QtcmF0aW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVlsRCxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLEtBQUssR0FBRyxLQUFLLENBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dHQURsQixvQkFBb0I7NEZBQXBCLG9CQUFvQixtVEFQckIsMkJBQTJCOzs0RkFPMUIsb0JBQW9CO2tCQVZoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsMkJBQTJCO29CQUVyQyxJQUFJLEVBQUU7d0JBQ0osMEJBQTBCLEVBQUUsTUFBTTt3QkFDbEMsNEJBQTRCLEVBQUUsU0FBUztxQkFDeEM7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAgQ29tcG9uZW50LCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcmItYXNwZWN0LXJhdGlvJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmVyYi1hc3BlY3QtcmF0aW9dJzogJ3RydWUnLFxuICAgICdbc3R5bGUuLS1lcmItYXNwZWN0LXJhdGlvXSc6ICdyYXRpbygpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEFzcGVjdFJhdGlvQ29tcG9uZW50IHtcbiAgcmF0aW8gPSBpbnB1dDxudW1iZXI+KDQgLyAzKTtcbn1cbiJdfQ==