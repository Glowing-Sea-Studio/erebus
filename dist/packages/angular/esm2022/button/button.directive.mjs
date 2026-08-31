import { Directive, input } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbButtonDirective {
    size = input('md');
    variant = input('solid');
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: ErbButtonDirective, isStandalone: true, selector: "button[erbButton], a[erbButton]", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-size": "size()", "attr.data-variant": "variant()" }, classAttribute: "erb-button" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[erbButton], a[erbButton]',
                    standalone: true,
                    host: {
                        class: 'erb-button',
                        '[attr.data-size]': 'size()',
                        '[attr.data-variant]': 'variant()',
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuZ3VsYXIvc3JjL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWNqRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLElBQUksR0FBRyxLQUFLLENBQWEsSUFBSSxDQUFDLENBQUM7SUFDL0IsT0FBTyxHQUFHLEtBQUssQ0FBZ0IsT0FBTyxDQUFDLENBQUM7d0dBRjdCLGtCQUFrQjs0RkFBbEIsa0JBQWtCOzs0RkFBbEIsa0JBQWtCO2tCQVQ5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLFVBQVUsRUFBRSxJQUFJO29CQUNoQixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFlBQVk7d0JBQ25CLGtCQUFrQixFQUFFLFFBQVE7d0JBQzVCLHFCQUFxQixFQUFFLFdBQVc7cUJBQ25DO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBCdXR0b25TaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnO1xuZXhwb3J0IHR5cGUgQnV0dG9uVmFyaWFudCA9ICdzb2xpZCcgfCAnb3V0bGluZScgfCAnZ2hvc3QnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdidXR0b25bZXJiQnV0dG9uXSwgYVtlcmJCdXR0b25dJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZXJiLWJ1dHRvbicsXG4gICAgJ1thdHRyLmRhdGEtc2l6ZV0nOiAnc2l6ZSgpJyxcbiAgICAnW2F0dHIuZGF0YS12YXJpYW50XSc6ICd2YXJpYW50KCknLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEVyYkJ1dHRvbkRpcmVjdGl2ZSB7XG4gIHNpemUgPSBpbnB1dDxCdXR0b25TaXplPignbWQnKTtcbiAgdmFyaWFudCA9IGlucHV0PEJ1dHRvblZhcmlhbnQ+KCdzb2xpZCcpO1xufVxuIl19