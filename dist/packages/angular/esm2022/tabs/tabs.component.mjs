import { Component, Directive, input } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbTabsComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbTabsComponent, isStandalone: true, selector: "erb-tabs", host: { classAttribute: "erb-tabs" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-tabs',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-tabs' }
                }]
        }] });
export class ErbTabsListComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabsListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbTabsListComponent, isStandalone: true, selector: "erb-tabs-list", host: { classAttribute: "erb-tabs-list" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabsListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-tabs-list',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-tabs-list' }
                }]
        }] });
export class ErbTabDirective {
    active = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: ErbTabDirective, isStandalone: true, selector: "[erbTab]", inputs: { active: { classPropertyName: "active", publicName: "active", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-state": "active() ? \"active\" : \"inactive\"" }, classAttribute: "erb-tab" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[erbTab]',
                    standalone: true,
                    host: {
                        class: 'erb-tab',
                        '[attr.data-state]': 'active() ? "active" : "inactive"'
                    }
                }]
        }] });
export class ErbTabsPanelComponent {
    active = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabsPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbTabsPanelComponent, isStandalone: true, selector: "erb-tabs-panel", inputs: { active: { classPropertyName: "active", publicName: "active", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-state": "active() ? \"active\" : \"inactive\"" }, classAttribute: "erb-tabs-panel" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbTabsPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-tabs-panel',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-tabs-panel',
                        '[attr.data-state]': 'active() ? "active" : "inactive"'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmd1bGFyL3NyYy90YWJzL3RhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFTNUQsTUFBTSxPQUFPLGdCQUFnQjt3R0FBaEIsZ0JBQWdCOzRGQUFoQixnQkFBZ0IsMEdBSGpCLDJCQUEyQjs7NEZBRzFCLGdCQUFnQjtrQkFQNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsVUFBVSxFQUFFLElBQUk7b0JBRWhCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7aUJBQzVCOztBQVVELE1BQU0sT0FBTyxvQkFBb0I7d0dBQXBCLG9CQUFvQjs0RkFBcEIsb0JBQW9CLG9IQUhyQiwyQkFBMkI7OzRGQUcxQixvQkFBb0I7a0JBUGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFVBQVUsRUFBRSxJQUFJO29CQUVoQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFO2lCQUNqQzs7QUFXRCxNQUFNLE9BQU8sZUFBZTtJQUMxQixNQUFNLEdBQUcsS0FBSyxDQUFVLEtBQUssQ0FBQyxDQUFDO3dHQURwQixlQUFlOzRGQUFmLGVBQWU7OzRGQUFmLGVBQWU7a0JBUjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLG1CQUFtQixFQUFFLGtDQUFrQztxQkFDeEQ7aUJBQ0Y7O0FBZUQsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxNQUFNLEdBQUcsS0FBSyxDQUFVLEtBQUssQ0FBQyxDQUFDO3dHQURwQixxQkFBcUI7NEZBQXJCLHFCQUFxQix3VUFOdEIsMkJBQTJCOzs0RkFNMUIscUJBQXFCO2tCQVZqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFVBQVUsRUFBRSxJQUFJO29CQUVoQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGdCQUFnQjt3QkFDdkIsbUJBQW1CLEVBQUUsa0NBQWtDO3FCQUN4RDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcmItdGFicycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7IGNsYXNzOiAnZXJiLXRhYnMnIH1cbn0pXG5leHBvcnQgY2xhc3MgRXJiVGFic0NvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcmItdGFicy1saXN0JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGhvc3Q6IHsgY2xhc3M6ICdlcmItdGFicy1saXN0JyB9XG59KVxuZXhwb3J0IGNsYXNzIEVyYlRhYnNMaXN0Q29tcG9uZW50IHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tlcmJUYWJdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaG9zdDogeyBcbiAgICBjbGFzczogJ2VyYi10YWInLFxuICAgICdbYXR0ci5kYXRhLXN0YXRlXSc6ICdhY3RpdmUoKSA/IFwiYWN0aXZlXCIgOiBcImluYWN0aXZlXCInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRXJiVGFiRGlyZWN0aXZlIHtcbiAgYWN0aXZlID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcmItdGFicy1wYW5lbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7IFxuICAgIGNsYXNzOiAnZXJiLXRhYnMtcGFuZWwnLFxuICAgICdbYXR0ci5kYXRhLXN0YXRlXSc6ICdhY3RpdmUoKSA/IFwiYWN0aXZlXCIgOiBcImluYWN0aXZlXCInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRXJiVGFic1BhbmVsQ29tcG9uZW50IHtcbiAgYWN0aXZlID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xufVxuIl19