import * as i0 from "@angular/core";
export type CheckboxSize = 'sm' | 'md' | 'lg';
export declare class ErbCheckboxComponent {
    size: import("@angular/core").InputSignal<CheckboxSize>;
    disabled: import("@angular/core").InputSignal<boolean>;
    checked: import("@angular/core").InputSignal<boolean>;
    checkedChange: import("@angular/core").OutputEmitterRef<boolean>;
    onChange(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErbCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErbCheckboxComponent, "erb-checkbox", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "checked": { "alias": "checked"; "required": false; "isSignal": true; }; }, { "checkedChange": "checkedChange"; }, never, ["*"], true, never>;
}
