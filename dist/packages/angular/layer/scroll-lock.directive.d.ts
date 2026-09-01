import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ScrollLockDirective implements OnDestroy {
    lock: import("@angular/core").InputSignal<boolean>;
    private locked;
    constructor();
    ngOnDestroy(): void;
    private enableLock;
    private disableLock;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollLockDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ScrollLockDirective, "[erbScrollLock]", never, { "lock": { "alias": "erbScrollLock"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
