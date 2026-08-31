import { Directive, input } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbInputDirective {
    size = input('md');
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbInputDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: ErbInputDirective, isStandalone: true, selector: "input[erbInput], textarea[erbInput]", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-size": "size()" }, classAttribute: "erb-input" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[erbInput], textarea[erbInput]',
                    standalone: true,
                    host: {
                        class: 'erb-input',
                        '[attr.data-size]': 'size()',
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9zcmMvaW5wdXQvaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVlqRCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLElBQUksR0FBRyxLQUFLLENBQVksSUFBSSxDQUFDLENBQUM7d0dBRG5CLGlCQUFpQjs0RkFBakIsaUJBQWlCOzs0RkFBakIsaUJBQWlCO2tCQVI3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQ0FBcUM7b0JBQy9DLFVBQVUsRUFBRSxJQUFJO29CQUNoQixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLGtCQUFrQixFQUFFLFFBQVE7cUJBQzdCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBJbnB1dFNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lucHV0W2VyYklucHV0XSwgdGV4dGFyZWFbZXJiSW5wdXRdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZXJiLWlucHV0JyxcbiAgICAnW2F0dHIuZGF0YS1zaXplXSc6ICdzaXplKCknLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEVyYklucHV0RGlyZWN0aXZlIHtcbiAgc2l6ZSA9IGlucHV0PElucHV0U2l6ZT4oJ21kJyk7XG59XG4iXX0=