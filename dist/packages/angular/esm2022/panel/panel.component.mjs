import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbPanelOverlayComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelOverlayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbPanelOverlayComponent, isStandalone: true, selector: "erb-panel-overlay", host: { classAttribute: "erb-panel-overlay" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelOverlayComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-panel-overlay',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-panel-overlay' }
                }]
        }] });
export class ErbPanelComponent {
    position = input('right');
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbPanelComponent, isStandalone: true, selector: "erb-panel", inputs: { position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-position": "position()" }, classAttribute: "erb-panel" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-panel',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'erb-panel',
                        '[attr.data-position]': 'position()'
                    }
                }]
        }] });
export class ErbPanelHeaderComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbPanelHeaderComponent, isStandalone: true, selector: "erb-panel-header", host: { classAttribute: "erb-panel-header" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-panel-header',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-panel-header' }
                }]
        }] });
export class ErbPanelTitleComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbPanelTitleComponent, isStandalone: true, selector: "erb-panel-title", host: { classAttribute: "erb-panel-title" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-panel-title',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-panel-title' }
                }]
        }] });
export class ErbPanelBodyComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbPanelBodyComponent, isStandalone: true, selector: "erb-panel-body", host: { classAttribute: "erb-panel-body" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-panel-body',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-panel-body' }
                }]
        }] });
export class ErbPanelFooterComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ErbPanelFooterComponent, isStandalone: true, selector: "erb-panel-footer", host: { classAttribute: "erb-panel-footer" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbPanelFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-panel-footer',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: { class: 'erb-panel-footer' }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9zcmMvcGFuZWwvcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVdqRCxNQUFNLE9BQU8sd0JBQXdCO3dHQUF4Qix3QkFBd0I7NEZBQXhCLHdCQUF3Qiw0SEFIekIsMkJBQTJCOzs0RkFHMUIsd0JBQXdCO2tCQVBwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFVBQVUsRUFBRSxJQUFJO29CQUVoQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUU7aUJBQ3JDOztBQWFELE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsUUFBUSxHQUFHLEtBQUssQ0FBZ0IsT0FBTyxDQUFDLENBQUM7d0dBRDlCLGlCQUFpQjs0RkFBakIsaUJBQWlCLDZTQU5sQiwyQkFBMkI7OzRGQU0xQixpQkFBaUI7a0JBVjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFVBQVUsRUFBRSxJQUFJO29CQUVoQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLHNCQUFzQixFQUFFLFlBQVk7cUJBQ3JDO2lCQUNGOztBQVlELE1BQU0sT0FBTyx1QkFBdUI7d0dBQXZCLHVCQUF1Qjs0RkFBdkIsdUJBQXVCLDBIQUh4QiwyQkFBMkI7OzRGQUcxQix1QkFBdUI7a0JBUG5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsVUFBVSxFQUFFLElBQUk7b0JBRWhCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRTtpQkFDcEM7O0FBVUQsTUFBTSxPQUFPLHNCQUFzQjt3R0FBdEIsc0JBQXNCOzRGQUF0QixzQkFBc0Isd0hBSHZCLDJCQUEyQjs7NEZBRzFCLHNCQUFzQjtrQkFQbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixVQUFVLEVBQUUsSUFBSTtvQkFFaEIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO2lCQUNuQzs7QUFVRCxNQUFNLE9BQU8scUJBQXFCO3dHQUFyQixxQkFBcUI7NEZBQXJCLHFCQUFxQixzSEFIdEIsMkJBQTJCOzs0RkFHMUIscUJBQXFCO2tCQVBqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFVBQVUsRUFBRSxJQUFJO29CQUVoQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUU7aUJBQ2xDOztBQVVELE1BQU0sT0FBTyx1QkFBdUI7d0dBQXZCLHVCQUF1Qjs0RkFBdkIsdUJBQXVCLDBIQUh4QiwyQkFBMkI7OzRGQUcxQix1QkFBdUI7a0JBUG5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsVUFBVSxFQUFFLElBQUk7b0JBRWhCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRTtpQkFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFBhbmVsUG9zaXRpb24gPSAnbGVmdCcgfCAncmlnaHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcmItcGFuZWwtb3ZlcmxheScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7IGNsYXNzOiAnZXJiLXBhbmVsLW92ZXJsYXknIH1cbn0pXG5leHBvcnQgY2xhc3MgRXJiUGFuZWxPdmVybGF5Q29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VyYi1wYW5lbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7IFxuICAgIGNsYXNzOiAnZXJiLXBhbmVsJyxcbiAgICAnW2F0dHIuZGF0YS1wb3NpdGlvbl0nOiAncG9zaXRpb24oKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBFcmJQYW5lbENvbXBvbmVudCB7XG4gIHBvc2l0aW9uID0gaW5wdXQ8UGFuZWxQb3NpdGlvbj4oJ3JpZ2h0Jyk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VyYi1wYW5lbC1oZWFkZXInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgaG9zdDogeyBjbGFzczogJ2VyYi1wYW5lbC1oZWFkZXInIH1cbn0pXG5leHBvcnQgY2xhc3MgRXJiUGFuZWxIZWFkZXJDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXJiLXBhbmVsLXRpdGxlJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGhvc3Q6IHsgY2xhc3M6ICdlcmItcGFuZWwtdGl0bGUnIH1cbn0pXG5leHBvcnQgY2xhc3MgRXJiUGFuZWxUaXRsZUNvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcmItcGFuZWwtYm9keScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7IGNsYXNzOiAnZXJiLXBhbmVsLWJvZHknIH1cbn0pXG5leHBvcnQgY2xhc3MgRXJiUGFuZWxCb2R5Q29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VyYi1wYW5lbC1mb290ZXInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgaG9zdDogeyBjbGFzczogJ2VyYi1wYW5lbC1mb290ZXInIH1cbn0pXG5leHBvcnQgY2xhc3MgRXJiUGFuZWxGb290ZXJDb21wb25lbnQge31cbiJdfQ==