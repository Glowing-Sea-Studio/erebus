import { Component, input, output } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbSwitchComponent {
    size = input('md');
    disabled = input(false);
    checked = input(false);
    checkedChange = output();
    onChange(event) {
        const input = event.target;
        this.checkedChange.emit(input.checked);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbSwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbSwitchComponent, isStandalone: true, selector: "erb-switch", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, checked: { classPropertyName: "checked", publicName: "checked", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { checkedChange: "checkedChange" }, host: { styleAttribute: "display: contents;" }, ngImport: i0, template: `
    <label class="erb-switch-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="checkbox" 
        role="switch"
        class="erb-switch" 
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-switch-label">
        <ng-content></ng-content>
      </span>
    </label>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbSwitchComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-switch',
                    standalone: true,
                    template: `
    <label class="erb-switch-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="checkbox" 
        role="switch"
        class="erb-switch" 
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-switch-label">
        <ng-content></ng-content>
      </span>
    </label>
  `,
                    host: {
                        style: 'display: contents;'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuZ3VsYXIvc3JjL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUEyQnpELE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsSUFBSSxHQUFHLEtBQUssQ0FBYSxJQUFJLENBQUMsQ0FBQztJQUMvQixRQUFRLEdBQUcsS0FBSyxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7SUFFaEMsYUFBYSxHQUFHLE1BQU0sRUFBVyxDQUFDO0lBRWxDLFFBQVEsQ0FBQyxLQUFZO1FBQ25CLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO3dHQVZVLGtCQUFrQjs0RkFBbEIsa0JBQWtCLG1pQkFwQm5COzs7Ozs7Ozs7Ozs7Ozs7R0FlVDs7NEZBS1Usa0JBQWtCO2tCQXZCOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxvQkFBb0I7cUJBQzVCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbnB1dCwgb3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFN3aXRjaFNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VyYi1zd2l0Y2gnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBjbGFzcz1cImVyYi1zd2l0Y2gtd3JhcHBlclwiIFthdHRyLmRhdGEtZGlzYWJsZWRdPVwiZGlzYWJsZWQoKVwiPlxuICAgICAgPGlucHV0IFxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgcm9sZT1cInN3aXRjaFwiXG4gICAgICAgIGNsYXNzPVwiZXJiLXN3aXRjaFwiIFxuICAgICAgICBbYXR0ci5kYXRhLXNpemVdPVwic2l6ZSgpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkKClcIlxuICAgICAgICBbY2hlY2tlZF09XCJjaGVja2VkKClcIlxuICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXJiLXN3aXRjaC1sYWJlbFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgYCxcbiAgaG9zdDoge1xuICAgIHN0eWxlOiAnZGlzcGxheTogY29udGVudHM7J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEVyYlN3aXRjaENvbXBvbmVudCB7XG4gIHNpemUgPSBpbnB1dDxTd2l0Y2hTaXplPignbWQnKTtcbiAgZGlzYWJsZWQgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG4gIGNoZWNrZWQgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG4gIFxuICBjaGVja2VkQ2hhbmdlID0gb3V0cHV0PGJvb2xlYW4+KCk7XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLmNoZWNrZWRDaGFuZ2UuZW1pdChpbnB1dC5jaGVja2VkKTtcbiAgfVxufVxuIl19