import { TemplateRef, ViewContainerRef, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PortalDirective implements OnInit, OnDestroy {
    private templateRef;
    private viewContainerRef;
    targetContainer: import("@angular/core").InputSignal<HTMLElement>;
    private viewRef?;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PortalDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PortalDirective, "[erbPortal]", never, { "targetContainer": { "alias": "erbPortal"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
