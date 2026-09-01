import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export type LayerEntry = {
    id: string;
    element: HTMLElement;
    close: () => void;
};
export declare class LayerManagerService implements OnDestroy {
    private stack;
    private handleKeyDownBound;
    constructor();
    ngOnDestroy(): void;
    register(id: string, element: HTMLElement, close: () => void): void;
    unregister(id: string): void;
    private handleKeyDown;
    private updateInert;
    private updateZIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerManagerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LayerManagerService>;
}
