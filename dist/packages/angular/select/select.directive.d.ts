import * as i0 from "@angular/core";
export type SelectSize = 'sm' | 'md' | 'lg';
export declare class ErbSelectDirective {
    size: import("@angular/core").InputSignal<SelectSize>;
    invalid: import("@angular/core").InputSignal<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErbSelectDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ErbSelectDirective, "select[erbSelect]", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "invalid": { "alias": "invalid"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
