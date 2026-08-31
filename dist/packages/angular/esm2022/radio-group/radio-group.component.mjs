import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbRadioGroupComponent {
    legend = input();
    disabled = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbRadioGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErbRadioGroupComponent, isStandalone: true, selector: "erb-radio-group", inputs: { legend: { classPropertyName: "legend", publicName: "legend", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, host: { styleAttribute: "display: contents;" }, ngImport: i0, template: `
    <fieldset class="erb-radio-group" [disabled]="disabled()">
      @if (legend()) {
        <legend class="erb-radio-group-legend">{{ legend() }}</legend>
      }
      <div class="erb-radio-group-content">
        <ng-content></ng-content>
      </div>
    </fieldset>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbRadioGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-radio-group',
                    standalone: true,
                    template: `
    <fieldset class="erb-radio-group" [disabled]="disabled()">
      @if (legend()) {
        <legend class="erb-radio-group-legend">{{ legend() }}</legend>
      }
      <div class="erb-radio-group-content">
        <ng-content></ng-content>
      </div>
    </fieldset>
  `,
                    host: {
                        style: 'display: contents;'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9zcmMvcmFkaW8tZ3JvdXAvcmFkaW8tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQW1CakQsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxNQUFNLEdBQUcsS0FBSyxFQUFVLENBQUM7SUFDekIsUUFBUSxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQzt3R0FGdEIsc0JBQXNCOzRGQUF0QixzQkFBc0IsbVlBZHZCOzs7Ozs7Ozs7R0FTVDs7NEZBS1Usc0JBQXNCO2tCQWpCbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLG9CQUFvQjtxQkFDNUI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VyYi1yYWRpby1ncm91cCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGZpZWxkc2V0IGNsYXNzPVwiZXJiLXJhZGlvLWdyb3VwXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkKClcIj5cbiAgICAgIEBpZiAobGVnZW5kKCkpIHtcbiAgICAgICAgPGxlZ2VuZCBjbGFzcz1cImVyYi1yYWRpby1ncm91cC1sZWdlbmRcIj57eyBsZWdlbmQoKSB9fTwvbGVnZW5kPlxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzcz1cImVyYi1yYWRpby1ncm91cC1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZmllbGRzZXQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBzdHlsZTogJ2Rpc3BsYXk6IGNvbnRlbnRzOydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBFcmJSYWRpb0dyb3VwQ29tcG9uZW50IHtcbiAgbGVnZW5kID0gaW5wdXQ8c3RyaW5nPigpO1xuICBkaXNhYmxlZCA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcbn1cbiJdfQ==