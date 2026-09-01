import { ResponsiveValue } from '../utils';
import * as i0 from "@angular/core";
export declare class SplitComponent {
    gap: import("@angular/core").InputSignal<ResponsiveValue<number>>;
    fraction: import("@angular/core").InputSignal<"1/2" | "1/3" | "2/3" | "1/4" | "3/4" | "auto-start" | "auto-end">;
    align: import("@angular/core").InputSignal<ResponsiveValue<"center" | "start" | "end" | "stretch">>;
    customStyle: import("@angular/core").Signal<{
        [x: string]: string | number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitComponent, "erb-split", never, { "gap": { "alias": "gap"; "required": false; "isSignal": true; }; "fraction": { "alias": "fraction"; "required": false; "isSignal": true; }; "align": { "alias": "align"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
