import * as i0 from "@angular/core";
export type AlertIntent = 'info' | 'success' | 'warning' | 'danger';
export declare class ErbAlertComponent {
    intent: import("@angular/core").InputSignal<AlertIntent>;
    title: import("@angular/core").InputSignal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErbAlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErbAlertComponent, "erb-alert", never, { "intent": { "alias": "intent"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
