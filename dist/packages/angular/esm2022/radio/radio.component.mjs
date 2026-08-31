import { Component, input, output } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbRadioComponent {
    size = input('md');
    disabled = input(false);
    checked = input(false);
    name = input();
    checkedChange = output();
    onChange(event) {
        const input = event.target;
        this.checkedChange.emit(input.checked);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbRadioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbRadioComponent, isStandalone: true, selector: "erb-radio", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, checked: { classPropertyName: "checked", publicName: "checked", isSignal: true, isRequired: false, transformFunction: null }, name: { classPropertyName: "name", publicName: "name", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { checkedChange: "checkedChange" }, host: { styleAttribute: "display: contents;" }, ngImport: i0, template: `
    <label class="erb-radio-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="radio" 
        class="erb-radio" 
        [name]="name()"
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-radio-label">
        <ng-content></ng-content>
      </span>
    </label>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbRadioComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-radio',
                    standalone: true,
                    template: `
    <label class="erb-radio-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="radio" 
        class="erb-radio" 
        [name]="name()"
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-radio-label">
        <ng-content></ng-content>
      </span>
    </label>
  `,
                    host: {
                        style: 'display: contents;'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9zcmMvcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUEyQnpELE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsSUFBSSxHQUFHLEtBQUssQ0FBWSxJQUFJLENBQUMsQ0FBQztJQUM5QixRQUFRLEdBQUcsS0FBSyxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7SUFDaEMsSUFBSSxHQUFHLEtBQUssRUFBVSxDQUFDO0lBRXZCLGFBQWEsR0FBRyxNQUFNLEVBQVcsQ0FBQztJQUVsQyxRQUFRLENBQUMsS0FBWTtRQUNuQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBMEIsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQzt3R0FYVSxpQkFBaUI7NEZBQWpCLGlCQUFpQix1cEJBcEJsQjs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7OzRGQUtVLGlCQUFpQjtrQkF2QjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztHQWVUO29CQUNELElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsb0JBQW9CO3FCQUM1QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQsIG91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBSYWRpb1NpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VyYi1yYWRpbycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIGNsYXNzPVwiZXJiLXJhZGlvLXdyYXBwZXJcIiBbYXR0ci5kYXRhLWRpc2FibGVkXT1cImRpc2FibGVkKClcIj5cbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgIGNsYXNzPVwiZXJiLXJhZGlvXCIgXG4gICAgICAgIFtuYW1lXT1cIm5hbWUoKVwiXG4gICAgICAgIFthdHRyLmRhdGEtc2l6ZV09XCJzaXplKClcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQoKVwiXG4gICAgICAgIFtjaGVja2VkXT1cImNoZWNrZWQoKVwiXG4gICAgICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJlcmItcmFkaW8tbGFiZWxcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBzdHlsZTogJ2Rpc3BsYXk6IGNvbnRlbnRzOydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBFcmJSYWRpb0NvbXBvbmVudCB7XG4gIHNpemUgPSBpbnB1dDxSYWRpb1NpemU+KCdtZCcpO1xuICBkaXNhYmxlZCA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcbiAgY2hlY2tlZCA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcbiAgbmFtZSA9IGlucHV0PHN0cmluZz4oKTtcbiAgXG4gIGNoZWNrZWRDaGFuZ2UgPSBvdXRwdXQ8Ym9vbGVhbj4oKTtcblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KGlucHV0LmNoZWNrZWQpO1xuICB9XG59XG4iXX0=