import { Component, input, output } from '@angular/core';
import * as i0 from "@angular/core";
export class ErbNumberInputComponent {
    size = input('md');
    disabled = input(false);
    invalid = input(false);
    value = input(0);
    min = input();
    max = input();
    step = input(1);
    valueChange = output();
    onInput(event) {
        const val = event.target.valueAsNumber;
        this.valueChange.emit(val);
    }
    increment() {
        let current = this.value();
        if (isNaN(current))
            current = 0;
        const s = this.step() ?? 1;
        let newVal = current + s;
        const mx = this.max();
        if (mx !== undefined && newVal > mx)
            newVal = mx;
        this.valueChange.emit(newVal);
    }
    decrement() {
        let current = this.value();
        if (isNaN(current))
            current = 0;
        const s = this.step() ?? 1;
        let newVal = current - s;
        const mn = this.min();
        if (mn !== undefined && newVal < mn)
            newVal = mn;
        this.valueChange.emit(newVal);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbNumberInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ErbNumberInputComponent, isStandalone: true, selector: "erb-number-input", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, invalid: { classPropertyName: "invalid", publicName: "invalid", isSignal: true, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, min: { classPropertyName: "min", publicName: "min", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, step: { classPropertyName: "step", publicName: "step", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueChange: "valueChange" }, host: { styleAttribute: "display: block; width: 100%;" }, ngImport: i0, template: `
    <div class="erb-number-input-wrapper">
      <input 
        type="number" 
        class="erb-number-input"
        [attr.data-size]="size()"
        [attr.aria-invalid]="invalid() ? 'true' : null"
        [disabled]="disabled()"
        [value]="value()"
        [min]="min()"
        [max]="max()"
        [step]="step()"
        (input)="onInput($event)"
      />
      <div class="erb-number-input-stepper">
        <button 
          type="button" 
          class="erb-number-input-stepper-btn" 
          [disabled]="disabled()"
          (click)="increment()"
          aria-label="Increment"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </button>
        <button 
          type="button" 
          class="erb-number-input-stepper-btn" 
          [disabled]="disabled()"
          (click)="decrement()"
          aria-label="Decrement"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    </div>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErbNumberInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'erb-number-input',
                    standalone: true,
                    template: `
    <div class="erb-number-input-wrapper">
      <input 
        type="number" 
        class="erb-number-input"
        [attr.data-size]="size()"
        [attr.aria-invalid]="invalid() ? 'true' : null"
        [disabled]="disabled()"
        [value]="value()"
        [min]="min()"
        [max]="max()"
        [step]="step()"
        (input)="onInput($event)"
      />
      <div class="erb-number-input-stepper">
        <button 
          type="button" 
          class="erb-number-input-stepper-btn" 
          [disabled]="disabled()"
          (click)="increment()"
          aria-label="Increment"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </button>
        <button 
          type="button" 
          class="erb-number-input-stepper-btn" 
          [disabled]="disabled()"
          (click)="decrement()"
          aria-label="Decrement"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    </div>
  `,
                    host: {
                        style: 'display: block; width: 100%;'
                    }
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuZ3VsYXIvc3JjL251bWJlci1pbnB1dC9udW1iZXItaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUErQ3pELE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsSUFBSSxHQUFHLEtBQUssQ0FBa0IsSUFBSSxDQUFDLENBQUM7SUFDcEMsUUFBUSxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUNqQyxPQUFPLEdBQUcsS0FBSyxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLEtBQUssR0FBRyxLQUFLLENBQVMsQ0FBQyxDQUFDLENBQUM7SUFDekIsR0FBRyxHQUFHLEtBQUssRUFBVSxDQUFDO0lBQ3RCLEdBQUcsR0FBRyxLQUFLLEVBQVUsQ0FBQztJQUN0QixJQUFJLEdBQUcsS0FBSyxDQUFTLENBQUMsQ0FBQyxDQUFDO0lBRXhCLFdBQVcsR0FBRyxNQUFNLEVBQVUsQ0FBQztJQUUvQixPQUFPLENBQUMsS0FBWTtRQUNsQixNQUFNLEdBQUcsR0FBSSxLQUFLLENBQUMsTUFBMkIsQ0FBQyxhQUFhLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksTUFBTSxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksRUFBRSxLQUFLLFNBQVMsSUFBSSxNQUFNLEdBQUcsRUFBRTtZQUFFLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksTUFBTSxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksRUFBRSxLQUFLLFNBQVMsSUFBSSxNQUFNLEdBQUcsRUFBRTtZQUFFLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzt3R0FsQ1UsdUJBQXVCOzRGQUF2Qix1QkFBdUIsZ2dDQXhDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNUOzs0RkFLVSx1QkFBdUI7a0JBM0NuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNUO29CQUNELElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsOEJBQThCO3FCQUN0QztpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQsIG91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBOdW1iZXJJbnB1dFNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VyYi1udW1iZXItaW5wdXQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJlcmItbnVtYmVyLWlucHV0LXdyYXBwZXJcIj5cbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdHlwZT1cIm51bWJlclwiIFxuICAgICAgICBjbGFzcz1cImVyYi1udW1iZXItaW5wdXRcIlxuICAgICAgICBbYXR0ci5kYXRhLXNpemVdPVwic2l6ZSgpXCJcbiAgICAgICAgW2F0dHIuYXJpYS1pbnZhbGlkXT1cImludmFsaWQoKSA/ICd0cnVlJyA6IG51bGxcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQoKVwiXG4gICAgICAgIFt2YWx1ZV09XCJ2YWx1ZSgpXCJcbiAgICAgICAgW21pbl09XCJtaW4oKVwiXG4gICAgICAgIFttYXhdPVwibWF4KClcIlxuICAgICAgICBbc3RlcF09XCJzdGVwKClcIlxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXJiLW51bWJlci1pbnB1dC1zdGVwcGVyXCI+XG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgIGNsYXNzPVwiZXJiLW51bWJlci1pbnB1dC1zdGVwcGVyLWJ0blwiIFxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZCgpXCJcbiAgICAgICAgICAoY2xpY2spPVwiaW5jcmVtZW50KClcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJJbmNyZW1lbnRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBvbHlsaW5lIHBvaW50cz1cIjE4IDE1IDEyIDkgNiAxNVwiPjwvcG9seWxpbmU+PC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICBjbGFzcz1cImVyYi1udW1iZXItaW5wdXQtc3RlcHBlci1idG5cIiBcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQoKVwiXG4gICAgICAgICAgKGNsaWNrKT1cImRlY3JlbWVudCgpXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVjcmVtZW50XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwb2x5bGluZSBwb2ludHM9XCI2IDkgMTIgMTUgMTggOVwiPjwvcG9seWxpbmU+PC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBzdHlsZTogJ2Rpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRXJiTnVtYmVySW5wdXRDb21wb25lbnQge1xuICBzaXplID0gaW5wdXQ8TnVtYmVySW5wdXRTaXplPignbWQnKTtcbiAgZGlzYWJsZWQgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG4gIGludmFsaWQgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG4gIHZhbHVlID0gaW5wdXQ8bnVtYmVyPigwKTtcbiAgbWluID0gaW5wdXQ8bnVtYmVyPigpO1xuICBtYXggPSBpbnB1dDxudW1iZXI+KCk7XG4gIHN0ZXAgPSBpbnB1dDxudW1iZXI+KDEpO1xuXG4gIHZhbHVlQ2hhbmdlID0gb3V0cHV0PG51bWJlcj4oKTtcblxuICBvbklucHV0KGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IHZhbCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVBc051bWJlcjtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsKTtcbiAgfVxuXG4gIGluY3JlbWVudCgpIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMudmFsdWUoKTtcbiAgICBpZiAoaXNOYU4oY3VycmVudCkpIGN1cnJlbnQgPSAwO1xuICAgIGNvbnN0IHMgPSB0aGlzLnN0ZXAoKSA/PyAxO1xuICAgIGxldCBuZXdWYWwgPSBjdXJyZW50ICsgcztcbiAgICBjb25zdCBteCA9IHRoaXMubWF4KCk7XG4gICAgaWYgKG14ICE9PSB1bmRlZmluZWQgJiYgbmV3VmFsID4gbXgpIG5ld1ZhbCA9IG14O1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChuZXdWYWwpO1xuICB9XG5cbiAgZGVjcmVtZW50KCkge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy52YWx1ZSgpO1xuICAgIGlmIChpc05hTihjdXJyZW50KSkgY3VycmVudCA9IDA7XG4gICAgY29uc3QgcyA9IHRoaXMuc3RlcCgpID8/IDE7XG4gICAgbGV0IG5ld1ZhbCA9IGN1cnJlbnQgLSBzO1xuICAgIGNvbnN0IG1uID0gdGhpcy5taW4oKTtcbiAgICBpZiAobW4gIT09IHVuZGVmaW5lZCAmJiBuZXdWYWwgPCBtbikgbmV3VmFsID0gbW47XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbCk7XG4gIH1cbn1cbiJdfQ==