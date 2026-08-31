import { Directive, input } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbSelectDirective {
    size = input('md');
    invalid = input(false);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbSelectDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: ErbSelectDirective, isStandalone: true, selector: "select[erbSelect]", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, invalid: { classPropertyName: "invalid", publicName: "invalid", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "attr.data-size": "size()", "attr.aria-invalid": "invalid() ? \"true\" : null" }, classAttribute: "erb-select" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbSelectDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'select[erbSelect]',
                    standalone: true,
                    host: {
                        class: 'erb-select',
                        '[attr.data-size]': 'size()',
                        '[attr.aria-invalid]': 'invalid() ? "true" : null'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuZ3VsYXIvc3JjL3NlbGVjdC9zZWxlY3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWFqRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLElBQUksR0FBRyxLQUFLLENBQWEsSUFBSSxDQUFDLENBQUM7SUFDL0IsT0FBTyxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQzt3R0FGckIsa0JBQWtCOzRGQUFsQixrQkFBa0I7OzRGQUFsQixrQkFBa0I7a0JBVDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsWUFBWTt3QkFDbkIsa0JBQWtCLEVBQUUsUUFBUTt3QkFDNUIscUJBQXFCLEVBQUUsMkJBQTJCO3FCQUNuRDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgU2VsZWN0U2l6ZSA9ICdzbScgfCAnbWQnIHwgJ2xnJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0W2VyYlNlbGVjdF0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdlcmItc2VsZWN0JyxcbiAgICAnW2F0dHIuZGF0YS1zaXplXSc6ICdzaXplKCknLFxuICAgICdbYXR0ci5hcmlhLWludmFsaWRdJzogJ2ludmFsaWQoKSA/IFwidHJ1ZVwiIDogbnVsbCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBFcmJTZWxlY3REaXJlY3RpdmUge1xuICBzaXplID0gaW5wdXQ8U2VsZWN0U2l6ZT4oJ21kJyk7XG4gIGludmFsaWQgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG59XG4iXX0=