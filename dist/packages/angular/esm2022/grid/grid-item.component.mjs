import { Component, input, computed } from '@angular/core';
import { resolveResponsiveProps } from '../utils';
import * as i0 from "@angular/core";
export class GridItemComponent {
    colSpan = input();
    rowSpan = input();
    customStyle = computed(() => {
        return {
            ...resolveResponsiveProps('--erb-grid-item-col-span', this.colSpan()),
            ...resolveResponsiveProps('--erb-grid-item-row-span', this.rowSpan())
        };
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GridItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: GridItemComponent, isStandalone: true, selector: "erb-grid-item", inputs: { colSpan: { classPropertyName: "colSpan", publicName: "colSpan", isSignal: true, isRequired: false, transformFunction: null }, rowSpan: { classPropertyName: "rowSpan", publicName: "rowSpan", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-grid-item": "true", "style": "customStyle()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GridItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-grid-item',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-grid-item]': 'true',
                        '[style]': 'customStyle()'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuZ3VsYXIvc3JjL2dyaWQvZ3JpZC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUcsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFZbkUsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixPQUFPLEdBQUcsS0FBSyxFQUEyQixDQUFDO0lBQzNDLE9BQU8sR0FBRyxLQUFLLEVBQTJCLENBQUM7SUFFM0MsV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDMUIsT0FBTztZQUNMLEdBQUcsc0JBQXNCLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JFLEdBQUcsc0JBQXNCLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3RFLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQzt3R0FUUSxpQkFBaUI7NEZBQWpCLGlCQUFpQixvYUFQbEIsMkJBQTJCOzs0RkFPMUIsaUJBQWlCO2tCQVY3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLDJCQUEyQjtvQkFFckMsSUFBSSxFQUFFO3dCQUNKLHVCQUF1QixFQUFFLE1BQU07d0JBQy9CLFNBQVMsRUFBRSxlQUFlO3FCQUMzQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICBDb21wb25lbnQsIGlucHV0LCBjb21wdXRlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVZhbHVlLCByZXNvbHZlUmVzcG9uc2l2ZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcmItZ3JpZC1pdGVtJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmVyYi1ncmlkLWl0ZW1dJzogJ3RydWUnLFxuICAgICdbc3R5bGVdJzogJ2N1c3RvbVN0eWxlKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgR3JpZEl0ZW1Db21wb25lbnQge1xuICBjb2xTcGFuID0gaW5wdXQ8UmVzcG9uc2l2ZVZhbHVlPG51bWJlcj4+KCk7XG4gIHJvd1NwYW4gPSBpbnB1dDxSZXNwb25zaXZlVmFsdWU8bnVtYmVyPj4oKTtcblxuICBjdXN0b21TdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzb2x2ZVJlc3BvbnNpdmVQcm9wcygnLS1lcmItZ3JpZC1pdGVtLWNvbC1zcGFuJywgdGhpcy5jb2xTcGFuKCkpLFxuICAgICAgLi4ucmVzb2x2ZVJlc3BvbnNpdmVQcm9wcygnLS1lcmItZ3JpZC1pdGVtLXJvdy1zcGFuJywgdGhpcy5yb3dTcGFuKCkpXG4gICAgfTtcbiAgfSk7XG59XG4iXX0=