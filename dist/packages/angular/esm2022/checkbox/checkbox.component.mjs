import { Component, input, output } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbCheckboxComponent {
    size = input('md');
    disabled = input(false);
    checked = input(false);
    checkedChange = output();
    onChange(event) {
        const input = event.target;
        this.checkedChange.emit(input.checked);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbCheckboxComponent, isStandalone: true, selector: "erb-checkbox", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, checked: { classPropertyName: "checked", publicName: "checked", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { checkedChange: "checkedChange" }, host: { styleAttribute: "display: contents;" }, ngImport: i0, template: `
    <label class="erb-checkbox-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="checkbox" 
        class="erb-checkbox" 
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-checkbox-label">
        <ng-content></ng-content>
      </span>
    </label>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbCheckboxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-checkbox',
                    standalone: true,
                    template: `
    <label class="erb-checkbox-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="checkbox" 
        class="erb-checkbox" 
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-checkbox-label">
        <ng-content></ng-content>
      </span>
    </label>
  `,
                    host: {
                        style: 'display: contents;'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9zcmMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUEwQnpELE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsSUFBSSxHQUFHLEtBQUssQ0FBZSxJQUFJLENBQUMsQ0FBQztJQUNqQyxRQUFRLEdBQUcsS0FBSyxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7SUFFaEMsYUFBYSxHQUFHLE1BQU0sRUFBVyxDQUFDO0lBRWxDLFFBQVEsQ0FBQyxLQUFZO1FBQ25CLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO3dHQVZVLG9CQUFvQjs0RkFBcEIsb0JBQW9CLHFpQkFuQnJCOzs7Ozs7Ozs7Ozs7OztHQWNUOzs0RkFLVSxvQkFBb0I7a0JBdEJoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUO29CQUNELElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsb0JBQW9CO3FCQUM1QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQsIG91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBDaGVja2JveFNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VyYi1jaGVja2JveCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIGNsYXNzPVwiZXJiLWNoZWNrYm94LXdyYXBwZXJcIiBbYXR0ci5kYXRhLWRpc2FibGVkXT1cImRpc2FibGVkKClcIj5cbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgIGNsYXNzPVwiZXJiLWNoZWNrYm94XCIgXG4gICAgICAgIFthdHRyLmRhdGEtc2l6ZV09XCJzaXplKClcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQoKVwiXG4gICAgICAgIFtjaGVja2VkXT1cImNoZWNrZWQoKVwiXG4gICAgICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJlcmItY2hlY2tib3gtbGFiZWxcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBzdHlsZTogJ2Rpc3BsYXk6IGNvbnRlbnRzOydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBFcmJDaGVja2JveENvbXBvbmVudCB7XG4gIHNpemUgPSBpbnB1dDxDaGVja2JveFNpemU+KCdtZCcpO1xuICBkaXNhYmxlZCA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcbiAgY2hlY2tlZCA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcbiAgXG4gIGNoZWNrZWRDaGFuZ2UgPSBvdXRwdXQ8Ym9vbGVhbj4oKTtcblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KGlucHV0LmNoZWNrZWQpO1xuICB9XG59XG4iXX0=