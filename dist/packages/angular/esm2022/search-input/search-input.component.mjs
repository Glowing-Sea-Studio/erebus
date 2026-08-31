import { Component, input, output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbSearchInputComponent {
    size = input('md');
    disabled = input(false);
    value = input('');
    placeholder = input('Search...');
    valueChange = output();
    inputRef;
    onInput(event) {
        const val = event.target.value;
        this.valueChange.emit(val);
    }
    clear() {
        this.valueChange.emit('');
        if (this.inputRef) {
            this.inputRef.nativeElement.focus();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbSearchInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErbSearchInputComponent, isStandalone: true, selector: "erb-search-input", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueChange: "valueChange" }, host: { styleAttribute: "display: block; width: 100%;" }, viewQueries: [{ propertyName: "inputRef", first: true, predicate: ["inputRef"], descendants: true }], ngImport: i0, template: `
    <div class="erb-search-input-wrapper">
      <div class="erb-search-input-icon">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input 
        #inputRef
        type="search" 
        class="erb-search-input"
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [value]="value()"
        [placeholder]="placeholder()"
        (input)="onInput($event)"
      />
      @if (value()) {
        <button 
          type="button" 
          class="erb-search-input-clear-btn" 
          aria-label="Clear search"
          (click)="clear()"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      }
    </div>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbSearchInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-search-input',
                    standalone: true,
                    template: `
    <div class="erb-search-input-wrapper">
      <div class="erb-search-input-icon">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input 
        #inputRef
        type="search" 
        class="erb-search-input"
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [value]="value()"
        [placeholder]="placeholder()"
        (input)="onInput($event)"
      />
      @if (value()) {
        <button 
          type="button" 
          class="erb-search-input-clear-btn" 
          aria-label="Clear search"
          (click)="clear()"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      }
    </div>
  `,
                    host: {
                        style: 'display: block; width: 100%;'
                    }
                }]
        }], propDecorators: { inputRef: [{
                type: ViewChild,
                args: ['inputRef']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuZ3VsYXIvc3JjL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBNENoRixNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLElBQUksR0FBRyxLQUFLLENBQWtCLElBQUksQ0FBQyxDQUFDO0lBQ3BDLFFBQVEsR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7SUFDakMsS0FBSyxHQUFHLEtBQUssQ0FBUyxFQUFFLENBQUMsQ0FBQztJQUMxQixXQUFXLEdBQUcsS0FBSyxDQUFTLFdBQVcsQ0FBQyxDQUFDO0lBRXpDLFdBQVcsR0FBRyxNQUFNLEVBQVUsQ0FBQztJQUVSLFFBQVEsQ0FBZ0M7SUFFL0QsT0FBTyxDQUFDLEtBQVk7UUFDbEIsTUFBTSxHQUFHLEdBQUksS0FBSyxDQUFDLE1BQTJCLENBQUMsS0FBSyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7d0dBcEJVLHVCQUF1Qjs0RkFBdkIsdUJBQXVCLHl4QkFyQ3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdDVDs7NEZBS1UsdUJBQXVCO2tCQXhDbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdDVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLDhCQUE4QjtxQkFDdEM7aUJBQ0Y7OEJBU3dCLFFBQVE7c0JBQTlCLFNBQVM7dUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQsIG91dHB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFNlYXJjaElucHV0U2l6ZSA9ICdzbScgfCAnbWQnIHwgJ2xnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXJiLXNlYXJjaC1pbnB1dCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImVyYi1zZWFyY2gtaW5wdXQtd3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImVyYi1zZWFyY2gtaW5wdXQtaWNvblwiPlxuICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTFcIiBjeT1cIjExXCIgcj1cIjhcIj48L2NpcmNsZT5cbiAgICAgICAgICA8bGluZSB4MT1cIjIxXCIgeTE9XCIyMVwiIHgyPVwiMTYuNjVcIiB5Mj1cIjE2LjY1XCI+PC9saW5lPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGlucHV0IFxuICAgICAgICAjaW5wdXRSZWZcbiAgICAgICAgdHlwZT1cInNlYXJjaFwiIFxuICAgICAgICBjbGFzcz1cImVyYi1zZWFyY2gtaW5wdXRcIlxuICAgICAgICBbYXR0ci5kYXRhLXNpemVdPVwic2l6ZSgpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkKClcIlxuICAgICAgICBbdmFsdWVdPVwidmFsdWUoKVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcbiAgICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50KVwiXG4gICAgICAvPlxuICAgICAgQGlmICh2YWx1ZSgpKSB7XG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgIGNsYXNzPVwiZXJiLXNlYXJjaC1pbnB1dC1jbGVhci1idG5cIiBcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xlYXIgc2VhcmNoXCJcbiAgICAgICAgICAoY2xpY2spPVwiY2xlYXIoKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgICAgICAgIDxsaW5lIHgxPVwiMThcIiB5MT1cIjZcIiB4Mj1cIjZcIiB5Mj1cIjE4XCI+PC9saW5lPlxuICAgICAgICAgICAgPGxpbmUgeDE9XCI2XCIgeTE9XCI2XCIgeDI9XCIxOFwiIHkyPVwiMThcIj48L2xpbmU+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgc3R5bGU6ICdkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEVyYlNlYXJjaElucHV0Q29tcG9uZW50IHtcbiAgc2l6ZSA9IGlucHV0PFNlYXJjaElucHV0U2l6ZT4oJ21kJyk7XG4gIGRpc2FibGVkID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuICB2YWx1ZSA9IGlucHV0PHN0cmluZz4oJycpO1xuICBwbGFjZWhvbGRlciA9IGlucHV0PHN0cmluZz4oJ1NlYXJjaC4uLicpO1xuXG4gIHZhbHVlQ2hhbmdlID0gb3V0cHV0PHN0cmluZz4oKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dFJlZicpIGlucHV0UmVmITogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBvbklucHV0KGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IHZhbCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoJycpO1xuICAgIGlmICh0aGlzLmlucHV0UmVmKSB7XG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==