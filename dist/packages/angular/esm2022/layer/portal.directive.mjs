import { Directive, input } from '@angular/core';
import * as i0 from "@angular/core";
export class PortalDirective {
    templateRef;
    viewContainerRef;
    targetContainer = input(undefined, { alias: 'erbPortal' });
    viewRef;
    constructor(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        if (typeof window !== 'undefined') {
            const container = this.targetContainer() || document.body;
            this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef);
            const rootNodes = this.viewRef.rootNodes;
            for (const node of rootNodes) {
                container.appendChild(node);
            }
        }
    }
    ngOnDestroy() {
        if (this.viewRef) {
            const rootNodes = this.viewRef.rootNodes;
            for (const node of rootNodes) {
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            }
            this.viewRef.destroy();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PortalDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "18.2.14", type: PortalDirective, isStandalone: true, selector: "[erbPortal]", inputs: { targetContainer: { classPropertyName: "targetContainer", publicName: "erbPortal", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PortalDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[erbPortal]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuZ3VsYXIvc3JjL2xheWVyL3BvcnRhbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9ELE1BQU0sZUFBZSxDQUFDOztBQU1uRyxNQUFNLE9BQU8sZUFBZTtJQU1oQjtJQUNBO0lBTlYsZUFBZSxHQUFHLEtBQUssQ0FBaUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFFbkYsT0FBTyxDQUFPO0lBRXRCLFlBQ1UsV0FBNkIsRUFDN0IsZ0JBQWtDO1FBRGxDLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3pDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUNsQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQztZQUUxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFMUUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDekMsS0FBSyxNQUFNLElBQUksSUFBSSxTQUFTLEVBQUUsQ0FBQztnQkFDN0IsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDekMsS0FBSyxNQUFNLElBQUksSUFBSSxTQUFTLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBQ0gsQ0FBQztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7d0dBakNVLGVBQWU7NEZBQWYsZUFBZTs7NEZBQWYsZUFBZTtrQkFKM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBpbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlcmJQb3J0YWxdJyxcclxuICBzdGFuZGFsb25lOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3J0YWxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgdGFyZ2V0Q29udGFpbmVyID0gaW5wdXQ8SFRNTEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkPih1bmRlZmluZWQsIHsgYWxpYXM6ICdlcmJQb3J0YWwnIH0pO1xyXG5cclxuICBwcml2YXRlIHZpZXdSZWY/OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy50YXJnZXRDb250YWluZXIoKSB8fCBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgICAgdGhpcy52aWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcclxuXHJcbiAgICAgIGNvbnN0IHJvb3ROb2RlcyA9IHRoaXMudmlld1JlZi5yb290Tm9kZXM7XHJcbiAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiByb290Tm9kZXMpIHtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMudmlld1JlZikge1xyXG4gICAgICBjb25zdCByb290Tm9kZXMgPSB0aGlzLnZpZXdSZWYucm9vdE5vZGVzO1xyXG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygcm9vdE5vZGVzKSB7XHJcbiAgICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnZpZXdSZWYuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=