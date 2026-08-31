import { ResponsiveValue } from '../utils';
import * as i0 from "@angular/core";
export declare class GridItemComponent {
    colSpan: import("@angular/core").InputSignal<ResponsiveValue<number>>;
    rowSpan: import("@angular/core").InputSignal<ResponsiveValue<number>>;
    customStyle: import("@angular/core").Signal<{
        [x: string]: string | number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridItemComponent, "erb-grid-item", never, { "colSpan": { "alias": "colSpan"; "required": false; "isSignal": true; }; "rowSpan": { "alias": "rowSpan"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
