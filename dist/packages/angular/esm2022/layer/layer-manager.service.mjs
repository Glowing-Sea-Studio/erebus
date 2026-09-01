import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LayerManagerService {
    stack = [];
    handleKeyDownBound;
    constructor() {
        this.handleKeyDownBound = this.handleKeyDown.bind(this);
        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', this.handleKeyDownBound);
        }
    }
    ngOnDestroy() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('keydown', this.handleKeyDownBound);
        }
    }
    register(id, element, close) {
        this.stack.push({ id, element, close });
        this.updateInert();
        this.updateZIndex(element);
    }
    unregister(id) {
        this.stack = this.stack.filter(entry => entry.id !== id);
        this.updateInert();
    }
    handleKeyDown(e) {
        if (e.key === 'Escape' && this.stack.length > 0) {
            const topLayer = this.stack[this.stack.length - 1];
            if (topLayer) {
                topLayer.close();
                e.stopPropagation();
            }
        }
    }
    updateInert() {
        if (typeof document === 'undefined')
            return;
        const root = document.querySelector('[data-erebus-root]') || document.body;
        const hasLayers = this.stack.length > 0;
        Array.from(root.children).forEach((child) => {
            const isLayer = this.stack.some(layer => layer.element === child || layer.element.contains(child));
            if (!isLayer && child.tagName !== 'SCRIPT' && child.tagName !== 'STYLE' && child.tagName !== 'NOSCRIPT') {
                if (hasLayers) {
                    child.setAttribute('inert', '');
                }
                else {
                    child.removeAttribute('inert');
                }
            }
        });
    }
    updateZIndex(element) {
        const baseZ = 1300; // Value for --erb-z-overlay based on shared.json
        element.style.zIndex = `calc(var(--erb-z-overlay, ${baseZ}) + ${this.stack.length})`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayerManagerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayerManagerService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayerManagerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9zcmMvbGF5ZXIvbGF5ZXItbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBV3RELE1BQU0sT0FBTyxtQkFBbUI7SUFDdEIsS0FBSyxHQUFpQixFQUFFLENBQUM7SUFDekIsa0JBQWtCLENBQTZCO0lBRXZEO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDbEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM5RCxDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDakUsQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsRUFBVSxFQUFFLE9BQW9CLEVBQUUsS0FBaUI7UUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxFQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sYUFBYSxDQUFDLENBQWdCO1FBQ3BDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDaEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLFFBQVEsRUFBRSxDQUFDO2dCQUNiLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3RCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXO1lBQUUsT0FBTztRQUU1QyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQztRQUMzRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25HLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUUsQ0FBQztnQkFDeEcsSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDZCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztxQkFBTSxDQUFDO29CQUNOLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sWUFBWSxDQUFDLE9BQW9CO1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLGlEQUFpRDtRQUNyRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyw2QkFBNkIsS0FBSyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7SUFDdkYsQ0FBQzt3R0EzRFUsbUJBQW1COzRHQUFuQixtQkFBbUIsY0FGbEIsTUFBTTs7NEZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgTGF5ZXJFbnRyeSA9IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIGNsb3NlOiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5ZXJNYW5hZ2VyU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBzdGFjazogTGF5ZXJFbnRyeVtdID0gW107XHJcbiAgcHJpdmF0ZSBoYW5kbGVLZXlEb3duQm91bmQ6IChlOiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaGFuZGxlS2V5RG93bkJvdW5kID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd25Cb3VuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bkJvdW5kKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyKGlkOiBzdHJpbmcsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbG9zZTogKCkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5zdGFjay5wdXNoKHsgaWQsIGVsZW1lbnQsIGNsb3NlIH0pO1xyXG4gICAgdGhpcy51cGRhdGVJbmVydCgpO1xyXG4gICAgdGhpcy51cGRhdGVaSW5kZXgoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICB1bnJlZ2lzdGVyKGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3RhY2sgPSB0aGlzLnN0YWNrLmZpbHRlcihlbnRyeSA9PiBlbnRyeS5pZCAhPT0gaWQpO1xyXG4gICAgdGhpcy51cGRhdGVJbmVydCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScgJiYgdGhpcy5zdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHRvcExheWVyID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAodG9wTGF5ZXIpIHtcclxuICAgICAgICB0b3BMYXllci5jbG9zZSgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlSW5lcnQoKSB7XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lcmVidXMtcm9vdF0nKSB8fCBkb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgaGFzTGF5ZXJzID0gdGhpcy5zdGFjay5sZW5ndGggPiAwO1xyXG5cclxuICAgIEFycmF5LmZyb20ocm9vdC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgY29uc3QgaXNMYXllciA9IHRoaXMuc3RhY2suc29tZShsYXllciA9PiBsYXllci5lbGVtZW50ID09PSBjaGlsZCB8fCBsYXllci5lbGVtZW50LmNvbnRhaW5zKGNoaWxkKSk7XHJcbiAgICAgIGlmICghaXNMYXllciAmJiBjaGlsZC50YWdOYW1lICE9PSAnU0NSSVBUJyAmJiBjaGlsZC50YWdOYW1lICE9PSAnU1RZTEUnICYmIGNoaWxkLnRhZ05hbWUgIT09ICdOT1NDUklQVCcpIHtcclxuICAgICAgICBpZiAoaGFzTGF5ZXJzKSB7XHJcbiAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaGlsZC5yZW1vdmVBdHRyaWJ1dGUoJ2luZXJ0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlWkluZGV4KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCBiYXNlWiA9IDEzMDA7IC8vIFZhbHVlIGZvciAtLWVyYi16LW92ZXJsYXkgYmFzZWQgb24gc2hhcmVkLmpzb25cclxuICAgIGVsZW1lbnQuc3R5bGUuekluZGV4ID0gYGNhbGModmFyKC0tZXJiLXotb3ZlcmxheSwgJHtiYXNlWn0pICsgJHt0aGlzLnN0YWNrLmxlbmd0aH0pYDtcclxuICB9XHJcbn1cclxuIl19