import { Component, input, computed } from '@angular/core';
import * as i0 from "@angular/core";
export class ScrollAreaComponent {
    maxHeight = input();
    formattedMaxHeight = computed(() => {
        const mh = this.maxHeight();
        if (mh === undefined)
            return undefined;
        return typeof mh === 'number' ? `${mh}px` : mh;
    });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ScrollAreaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ScrollAreaComponent, isStandalone: true, selector: "erb-scroll-area", inputs: { maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.erb-scroll-area": "true", "style.--erb-scroll-area-max-height": "formattedMaxHeight()" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ScrollAreaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-scroll-area',
                    standalone: true,
                    template: `<ng-content></ng-content>`,
                    host: {
                        '[class.erb-scroll-area]': 'true',
                        '[style.--erb-scroll-area-max-height]': 'formattedMaxHeight()'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5ndWxhci9zcmMvc2Nyb2xsLWFyZWEvc2Nyb2xsLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRyxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFZNUQsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixTQUFTLEdBQUcsS0FBSyxFQUFtQixDQUFDO0lBRXJDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDakMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVCLElBQUksRUFBRSxLQUFLLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUN2QyxPQUFPLE9BQU8sRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO3dHQVBRLG1CQUFtQjs0RkFBbkIsbUJBQW1CLG9WQVBwQiwyQkFBMkI7OzRGQU8xQixtQkFBbUI7a0JBVi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSwyQkFBMkI7b0JBRXJDLElBQUksRUFBRTt3QkFDSix5QkFBeUIsRUFBRSxNQUFNO3dCQUNqQyxzQ0FBc0MsRUFBRSxzQkFBc0I7cUJBQy9EO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIENvbXBvbmVudCwgaW5wdXQsIGNvbXB1dGVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VyYi1zY3JvbGwtYXJlYScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5lcmItc2Nyb2xsLWFyZWFdJzogJ3RydWUnLFxuICAgICdbc3R5bGUuLS1lcmItc2Nyb2xsLWFyZWEtbWF4LWhlaWdodF0nOiAnZm9ybWF0dGVkTWF4SGVpZ2h0KCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsQXJlYUNvbXBvbmVudCB7XG4gIG1heEhlaWdodCA9IGlucHV0PG51bWJlciB8IHN0cmluZz4oKTtcblxuICBmb3JtYXR0ZWRNYXhIZWlnaHQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgbWggPSB0aGlzLm1heEhlaWdodCgpO1xuICAgIGlmIChtaCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiB0eXBlb2YgbWggPT09ICdudW1iZXInID8gYCR7bWh9cHhgIDogbWg7XG4gIH0pO1xufVxuIl19