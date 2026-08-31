import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export type SearchInputSize = 'sm' | 'md' | 'lg';
export declare class ErbSearchInputComponent {
    size: import("@angular/core").InputSignal<SearchInputSize>;
    disabled: import("@angular/core").InputSignal<boolean>;
    value: import("@angular/core").InputSignal<string>;
    placeholder: import("@angular/core").InputSignal<string>;
    valueChange: import("@angular/core").OutputEmitterRef<string>;
    inputRef: ElementRef<HTMLInputElement>;
    onInput(event: Event): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErbSearchInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErbSearchInputComponent, "erb-search-input", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "value": { "alias": "value"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
