import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbAlertComponent {
    intent = input('info');
    title = input();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErbAlertComponent, isStandalone: true, selector: "erb-alert", inputs: { intent: { classPropertyName: "intent", publicName: "intent", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-intent": "intent()" }, classAttribute: "erb-alert" }, ngImport: i0, template: `
    <div class="erb-alert-content">
      @if (title()) {
        <div class="erb-alert-title">{{ title() }}</div>
      }
      <div class="erb-alert-description">
        <ng-content></ng-content>
      </div>
    </div>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbAlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-alert',
                    standalone: true,
                    template: `
    <div class="erb-alert-content">
      @if (title()) {
        <div class="erb-alert-title">{{ title() }}</div>
      }
      <div class="erb-alert-description">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                    host: {
                        class: 'erb-alert',
                        '[attr.data-intent]': 'intent()',
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9zcmMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFHLE1BQU0sZUFBZSxDQUFDOztBQXVCbEQsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixNQUFNLEdBQUcsS0FBSyxDQUFjLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLEtBQUssR0FBRyxLQUFLLEVBQVUsQ0FBQzt3R0FGYixpQkFBaUI7NEZBQWpCLGlCQUFpQiwyWkFmbEI7Ozs7Ozs7OztHQVNUOzs0RkFNVSxpQkFBaUI7a0JBbkI3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixVQUFVLEVBQUUsSUFBSTtvQkFFaEIsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLG9CQUFvQixFQUFFLFVBQVU7cUJBQ2pDO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbnB1dCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgQWxlcnRJbnRlbnQgPSAnaW5mbycgfCAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZGFuZ2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXJiLWFsZXJ0JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImVyYi1hbGVydC1jb250ZW50XCI+XG4gICAgICBAaWYgKHRpdGxlKCkpIHtcbiAgICAgICAgPGRpdiBjbGFzcz1cImVyYi1hbGVydC10aXRsZVwiPnt7IHRpdGxlKCkgfX08L2Rpdj5cbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3M9XCJlcmItYWxlcnQtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2VyYi1hbGVydCcsXG4gICAgJ1thdHRyLmRhdGEtaW50ZW50XSc6ICdpbnRlbnQoKScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRXJiQWxlcnRDb21wb25lbnQge1xuICBpbnRlbnQgPSBpbnB1dDxBbGVydEludGVudD4oJ2luZm8nKTtcbiAgdGl0bGUgPSBpbnB1dDxzdHJpbmc+KCk7XG59XG4iXX0=