import * as i0 from "@angular/core";
export type NumberInputSize = 'sm' | 'md' | 'lg';
export declare class ErbNumberInputComponent {
    size: import("@angular/core").InputSignal<NumberInputSize>;
    disabled: import("@angular/core").InputSignal<boolean>;
    invalid: import("@angular/core").InputSignal<boolean>;
    value: import("@angular/core").InputSignal<number>;
    min: import("@angular/core").InputSignal<number>;
    max: import("@angular/core").InputSignal<number>;
    step: import("@angular/core").InputSignal<number>;
    valueChange: import("@angular/core").OutputEmitterRef<number>;
    onInput(event: Event): void;
    increment(): void;
    decrement(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErbNumberInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErbNumberInputComponent, "erb-number-input", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "invalid": { "alias": "invalid"; "required": false; "isSignal": true; }; "value": { "alias": "value"; "required": false; "isSignal": true; }; "min": { "alias": "min"; "required": false; "isSignal": true; }; "max": { "alias": "max"; "required": false; "isSignal": true; }; "step": { "alias": "step"; "required": false; "isSignal": true; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
