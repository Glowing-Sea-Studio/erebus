import { Component } from '@angular/core';
import { ErbInputDirective, ErbTextareaDirective, ErbCheckboxComponent, ErbRadioComponent, ErbSwitchComponent, RangeSliderComponent } from '@glowing-sea-studio/erebus-angular';

@Component({
  selector: 'app-forms-example',
  standalone: true,
  imports: [ErbInputDirective, ErbTextareaDirective, ErbCheckboxComponent, ErbRadioComponent, ErbSwitchComponent, RangeSliderComponent],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <input erbInput placeholder="Text input..." />
      <textarea erbTextarea placeholder="Textarea..."></textarea>
      <div style="display: flex; gap: 1rem;">
        <erb-checkbox id="chk1" label="Checkbox 1"></erb-checkbox>
        <erb-checkbox id="chk2" label="Checkbox 2" [checked]="true"></erb-checkbox>
      </div>
      <div style="display: flex; gap: 1rem;">
        <erb-radio id="rad1" name="radio-demo" label="Radio 1"></erb-radio>
        <erb-radio id="rad2" name="radio-demo" label="Radio 2" [checked]="true"></erb-radio>
      </div>
      <erb-switch id="sw1" label="Toggle switch" [checked]="true"></erb-switch>
      <div style="display: flex; gap: 1rem; align-items: center;">
        <span style="color: var(--erb-color-neutral-fg);">Slider</span>
        <div style="flex: 1;"><erb-range-slider [min]="0" [max]="100" [step]="1"></erb-range-slider></div>
      </div>
    </div>
  `
})
export class FormsExampleComponent {}
