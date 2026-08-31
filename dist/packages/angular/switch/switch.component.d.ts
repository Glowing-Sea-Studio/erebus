import * as i0 from "@angular/core";
export type SwitchSize = 'sm' | 'md' | 'lg';
export declare class ErbSwitchComponent {
    size: import("@angular/core").InputSignal<SwitchSize>;
    disabled: import("@angular/core").InputSignal<boolean>;
    checked: import("@angular/core").InputSignal<boolean>;
    checkedChange: import("@angular/core").OutputEmitterRef<boolean>;
    onChange(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErbSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErbSwitchComponent, "erb-switch", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "checked": { "alias": "checked"; "required": false; "isSignal": true; }; }, { "checkedChange": "checkedChange"; }, never, ["*"], true, never>;
}
