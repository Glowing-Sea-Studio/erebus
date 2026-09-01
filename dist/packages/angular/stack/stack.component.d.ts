import { ResponsiveValue } from '../utils';
import * as i0 from "@angular/core";
export declare class StackComponent {
    gap: import("@angular/core").InputSignal<ResponsiveValue<number>>;
    align: import("@angular/core").InputSignal<ResponsiveValue<"center" | "start" | "end" | "stretch" | "baseline">>;
    justify: import("@angular/core").InputSignal<ResponsiveValue<"center" | "start" | "end" | "space-between" | "space-around" | "space-evenly">>;
    customStyle: import("@angular/core").Signal<{
        [x: string]: string | number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StackComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StackComponent, "erb-stack", never, { "gap": { "alias": "gap"; "required": false; "isSignal": true; }; "align": { "alias": "align"; "required": false; "isSignal": true; }; "justify": { "alias": "justify"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
