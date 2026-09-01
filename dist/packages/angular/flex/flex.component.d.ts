import { ResponsiveValue } from '../utils';
import * as i0 from "@angular/core";
export declare class FlexComponent {
    direction: import("@angular/core").InputSignal<ResponsiveValue<"row" | "row-reverse" | "column" | "column-reverse">>;
    gap: import("@angular/core").InputSignal<ResponsiveValue<number>>;
    align: import("@angular/core").InputSignal<ResponsiveValue<"center" | "start" | "end" | "stretch" | "baseline">>;
    justify: import("@angular/core").InputSignal<ResponsiveValue<"center" | "start" | "end" | "space-between" | "space-around" | "space-evenly">>;
    wrap: import("@angular/core").InputSignal<ResponsiveValue<"nowrap" | "wrap" | "wrap-reverse">>;
    customStyle: import("@angular/core").Signal<{
        [x: string]: string | number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlexComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlexComponent, "erb-flex", never, { "direction": { "alias": "direction"; "required": false; "isSignal": true; }; "gap": { "alias": "gap"; "required": false; "isSignal": true; }; "align": { "alias": "align"; "required": false; "isSignal": true; }; "justify": { "alias": "justify"; "required": false; "isSignal": true; }; "wrap": { "alias": "wrap"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
