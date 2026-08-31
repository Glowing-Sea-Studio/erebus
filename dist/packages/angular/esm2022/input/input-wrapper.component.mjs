import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbInputWrapperComponent {
    label = input();
    error = input();
    inputId = input();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbInputWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErbInputWrapperComponent, isStandalone: true, selector: "erb-input-wrapper", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, error: { classPropertyName: "error", publicName: "error", isSignal: true, isRequired: false, transformFunction: null }, inputId: { classPropertyName: "inputId", publicName: "inputId", isSignal: true, isRequired: false, transformFunction: null } }, host: { classAttribute: "erb-input-wrapper" }, ngImport: i0, template: `
    @if (label()) {
      <label class="erb-label" [attr.for]="inputId()">{{ label() }}</label>
    }
    <ng-content></ng-content>
    @if (error()) {
      <div class="erb-error-message">{{ error() }}</div>
    }
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbInputWrapperComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-input-wrapper',
                    standalone: true,
                    template: `
    @if (label()) {
      <label class="erb-label" [attr.for]="inputId()">{{ label() }}</label>
    }
    <ng-content></ng-content>
    @if (error()) {
      <div class="erb-error-message">{{ error() }}</div>
    }
  `,
                    host: {
                        class: 'erb-input-wrapper',
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmd1bGFyL3NyYy9pbnB1dC9pbnB1dC13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRyxNQUFNLGVBQWUsQ0FBQzs7QUFtQmxELE1BQU0sT0FBTyx3QkFBd0I7SUFDbkMsS0FBSyxHQUFHLEtBQUssRUFBVSxDQUFDO0lBQ3hCLEtBQUssR0FBRyxLQUFLLEVBQVUsQ0FBQztJQUN4QixPQUFPLEdBQUcsS0FBSyxFQUFVLENBQUM7d0dBSGYsd0JBQXdCOzRGQUF4Qix3QkFBd0Isc2ZBYnpCOzs7Ozs7OztHQVFUOzs0RkFLVSx3QkFBd0I7a0JBakJwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFVBQVUsRUFBRSxJQUFJO29CQUVoQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxtQkFBbUI7cUJBQzNCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbnB1dCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXJiLWlucHV0LXdyYXBwZXInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBcbiAgdGVtcGxhdGU6IGBcbiAgICBAaWYgKGxhYmVsKCkpIHtcbiAgICAgIDxsYWJlbCBjbGFzcz1cImVyYi1sYWJlbFwiIFthdHRyLmZvcl09XCJpbnB1dElkKClcIj57eyBsYWJlbCgpIH19PC9sYWJlbD5cbiAgICB9XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIEBpZiAoZXJyb3IoKSkge1xuICAgICAgPGRpdiBjbGFzcz1cImVyYi1lcnJvci1tZXNzYWdlXCI+e3sgZXJyb3IoKSB9fTwvZGl2PlxuICAgIH1cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZXJiLWlucHV0LXdyYXBwZXInLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEVyYklucHV0V3JhcHBlckNvbXBvbmVudCB7XG4gIGxhYmVsID0gaW5wdXQ8c3RyaW5nPigpO1xuICBlcnJvciA9IGlucHV0PHN0cmluZz4oKTtcbiAgaW5wdXRJZCA9IGlucHV0PHN0cmluZz4oKTtcbn1cbiJdfQ==