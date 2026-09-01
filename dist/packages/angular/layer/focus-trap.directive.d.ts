import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FocusTrapDirective implements OnInit, OnDestroy {
    private el;
    active: import("@angular/core").InputSignal<boolean>;
    private previousFocus;
    private handleKeyDownBound;
    constructor(el: ElementRef<HTMLElement>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private activate;
    private deactivate;
    private handleKeyDown;
    static ɵfac: i0.ɵɵFactoryDeclaration<FocusTrapDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FocusTrapDirective, "[erbFocusTrap]", never, { "active": { "alias": "erbFocusTrap"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
