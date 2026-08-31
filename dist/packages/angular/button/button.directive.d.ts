import * as i0 from "@angular/core";
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export declare class ErbButtonDirective {
    size: import("@angular/core").InputSignal<ButtonSize>;
    variant: import("@angular/core").InputSignal<ButtonVariant>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErbButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ErbButtonDirective, "button[erbButton], a[erbButton]", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
