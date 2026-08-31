import * as i0 from "@angular/core";
export type RadioSize = 'sm' | 'md' | 'lg';
export declare class ErbRadioComponent {
    size: import("@angular/core").InputSignal<RadioSize>;
    disabled: import("@angular/core").InputSignal<boolean>;
    checked: import("@angular/core").InputSignal<boolean>;
    name: import("@angular/core").InputSignal<string>;
    checkedChange: import("@angular/core").OutputEmitterRef<boolean>;
    onChange(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErbRadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErbRadioComponent, "erb-radio", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "checked": { "alias": "checked"; "required": false; "isSignal": true; }; "name": { "alias": "name"; "required": false; "isSignal": true; }; }, { "checkedChange": "checkedChange"; }, never, ["*"], true, never>;
}
