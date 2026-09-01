import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TransitionDirective {
    private el;
    private renderer;
    isOpen: import("@angular/core").InputSignal<boolean>;
    duration: import("@angular/core").InputSignal<number>;
    private timeoutId;
    constructor(el: ElementRef<HTMLElement>, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<TransitionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TransitionDirective, "[erbTransition]", never, { "isOpen": { "alias": "erbTransition"; "required": false; "isSignal": true; }; "duration": { "alias": "duration"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
