import { Component, Directive, input } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbMenuComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbMenuComponent, isStandalone: true, selector: "erb-menu", host: { classAttribute: "erb-menu" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-menu',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-menu' }
                }]
        }] });
export class ErbMenuItemDirective {
    disabled = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbMenuItemDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: ErbMenuItemDirective, isStandalone: true, selector: "[erbMenuItem]", inputs: { disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.disabled": "disabled() ? true : null" }, classAttribute: "erb-menu-item" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbMenuItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[erbMenuItem]',
                    standalone: true,
                    host: {
                        class: 'erb-menu-item',
                        '[attr.disabled]': 'disabled() ? true : null'
                    }
                }]
        }] });
export class ErbMenuSeparatorComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbMenuSeparatorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbMenuSeparatorComponent, isStandalone: true, selector: "erb-menu-separator", host: { classAttribute: "erb-menu-separator" }, ngImport: i0, template: ``, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbMenuSeparatorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-menu-separator',
                    standalone: true,
                    template: ``,
                    host: { class: 'erb-menu-separator' }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmd1bGFyL3NyYy9tZW51L21lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFTNUQsTUFBTSxPQUFPLGdCQUFnQjt3R0FBaEIsZ0JBQWdCOzRGQUFoQixnQkFBZ0IsMEdBSGpCLDJCQUEyQjs7NEZBRzFCLGdCQUFnQjtrQkFQNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsVUFBVSxFQUFFLElBQUk7b0JBRWhCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7aUJBQzVCOztBQVdELE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsUUFBUSxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQzt3R0FEdEIsb0JBQW9COzRGQUFwQixvQkFBb0I7OzRGQUFwQixvQkFBb0I7a0JBUmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGVBQWU7d0JBQ3RCLGlCQUFpQixFQUFFLDBCQUEwQjtxQkFDOUM7aUJBQ0Y7O0FBWUQsTUFBTSxPQUFPLHlCQUF5Qjt3R0FBekIseUJBQXlCOzRGQUF6Qix5QkFBeUIsOEhBSDFCLEVBQUU7OzRGQUdELHlCQUF5QjtrQkFQckMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixVQUFVLEVBQUUsSUFBSTtvQkFFaEIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcmItbWVudScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7IGNsYXNzOiAnZXJiLW1lbnUnIH1cbn0pXG5leHBvcnQgY2xhc3MgRXJiTWVudUNvbXBvbmVudCB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZXJiTWVudUl0ZW1dJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZXJiLW1lbnUtaXRlbScsXG4gICAgJ1thdHRyLmRpc2FibGVkXSc6ICdkaXNhYmxlZCgpID8gdHJ1ZSA6IG51bGwnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRXJiTWVudUl0ZW1EaXJlY3RpdmUge1xuICBkaXNhYmxlZCA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXJiLW1lbnUtc2VwYXJhdG9yJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDogeyBjbGFzczogJ2VyYi1tZW51LXNlcGFyYXRvcicgfVxufSlcbmV4cG9ydCBjbGFzcyBFcmJNZW51U2VwYXJhdG9yQ29tcG9uZW50IHt9XG4iXX0=