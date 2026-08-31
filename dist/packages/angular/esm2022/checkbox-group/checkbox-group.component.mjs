import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbCheckboxGroupComponent {
    legend = input();
    disabled = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCheckboxGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErbCheckboxGroupComponent, isStandalone: true, selector: "erb-checkbox-group", inputs: { legend: { classPropertyName: "legend", publicName: "legend", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, host: { styleAttribute: "display: contents;" }, ngImport: i0, template: `
    <fieldset class="erb-checkbox-group" [disabled]="disabled()">
      @if (legend()) {
        <legend class="erb-checkbox-group-legend">{{ legend() }}</legend>
      }
      <div class="erb-checkbox-group-content">
        <ng-content></ng-content>
      </div>
    </fieldset>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCheckboxGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-checkbox-group',
                    standalone: true,
                    template: `
    <fieldset class="erb-checkbox-group" [disabled]="disabled()">
      @if (legend()) {
        <legend class="erb-checkbox-group-legend">{{ legend() }}</legend>
      }
      <div class="erb-checkbox-group-content">
        <ng-content></ng-content>
      </div>
    </fieldset>
  `,
                    host: {
                        style: 'display: contents;'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9zcmMvY2hlY2tib3gtZ3JvdXAvY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQW1CakQsTUFBTSxPQUFPLHlCQUF5QjtJQUNwQyxNQUFNLEdBQUcsS0FBSyxFQUFVLENBQUM7SUFDekIsUUFBUSxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQzt3R0FGdEIseUJBQXlCOzRGQUF6Qix5QkFBeUIsc1lBZDFCOzs7Ozs7Ozs7R0FTVDs7NEZBS1UseUJBQXlCO2tCQWpCckMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLG9CQUFvQjtxQkFDNUI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VyYi1jaGVja2JveC1ncm91cCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGZpZWxkc2V0IGNsYXNzPVwiZXJiLWNoZWNrYm94LWdyb3VwXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkKClcIj5cbiAgICAgIEBpZiAobGVnZW5kKCkpIHtcbiAgICAgICAgPGxlZ2VuZCBjbGFzcz1cImVyYi1jaGVja2JveC1ncm91cC1sZWdlbmRcIj57eyBsZWdlbmQoKSB9fTwvbGVnZW5kPlxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzcz1cImVyYi1jaGVja2JveC1ncm91cC1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZmllbGRzZXQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBzdHlsZTogJ2Rpc3BsYXk6IGNvbnRlbnRzOydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBFcmJDaGVja2JveEdyb3VwQ29tcG9uZW50IHtcbiAgbGVnZW5kID0gaW5wdXQ8c3RyaW5nPigpO1xuICBkaXNhYmxlZCA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcbn1cbiJdfQ==