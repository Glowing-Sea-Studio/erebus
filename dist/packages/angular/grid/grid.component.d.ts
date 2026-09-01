import { ResponsiveValue } from '../utils';
import * as i0 from "@angular/core";
export declare class GridComponent {
    cols: import("@angular/core").InputSignal<ResponsiveValue<number>>;
    gap: import("@angular/core").InputSignal<ResponsiveValue<number>>;
    align: import("@angular/core").InputSignal<ResponsiveValue<"center" | "start" | "end" | "stretch">>;
    justify: import("@angular/core").InputSignal<ResponsiveValue<"center" | "start" | "end" | "stretch">>;
    customStyle: import("@angular/core").Signal<{
        [x: string]: string | number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridComponent, "erb-grid", never, { "cols": { "alias": "cols"; "required": false; "isSignal": true; }; "gap": { "alias": "gap"; "required": false; "isSignal": true; }; "align": { "alias": "align"; "required": false; "isSignal": true; }; "justify": { "alias": "justify"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
