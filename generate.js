const fs = require('fs');
const path = require('path');

const basePath = '/media/thibault/SSD_DATA/DEV/workspaces/Glowing Sea Studio/APPS/erebus';

const reactCode = (name) => `import React from 'react';

export interface ${name}Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
}

export const ${name} = React.forwardRef<HTMLInputElement, ${name}Props>(
  ({ className = '', size = 'md', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="${name === 'TimePicker' ? 'time' : 'date'}"
        className={\`erb-${name.toLowerCase()} \${className}\`}
        data-size={size}
        {...props}
      />
    );
  }
);

${name}.displayName = '${name}';
`;

const reactDateRangeCode = `import React from 'react';

export interface DateRangePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  size?: 'sm' | 'md' | 'lg';
  startDate?: string;
  endDate?: string;
  onStartDateChange?: (date: string) => void;
  onEndDateChange?: (date: string) => void;
}

export const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  ({ className = '', size = 'md', startDate, endDate, onStartDateChange, onEndDateChange, ...props }, ref) => {
    return (
      <div ref={ref} className={\`erb-daterangepicker \${className}\`} data-size={size} {...props}>
        <input 
          type="date" 
          className="erb-daterangepicker-start" 
          value={startDate || ''} 
          onChange={(e) => onStartDateChange?.(e.target.value)} 
        />
        <span className="erb-daterangepicker-separator">-</span>
        <input 
          type="date" 
          className="erb-daterangepicker-end" 
          value={endDate || ''} 
          onChange={(e) => onEndDateChange?.(e.target.value)} 
        />
      </div>
    );
  }
);

DateRangePicker.displayName = 'DateRangePicker';
`;

const reactTest = (name) => `import React from 'react';
import { render } from '@testing-library/react';
import { ${name} } from './${name}';

describe('${name}', () => {
  it('renders correctly', () => {
    const { container } = render(<${name} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
`;

const reactStories = (name) => `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';

const meta: Meta<typeof ${name}> = {
  title: 'Components/${name}',
  component: ${name},
};

export default meta;
type Story = StoryObj<typeof ${name}>;

export const Default: Story = {
  args: {},
};
`;

const reactIndex = (name) => `export * from './${name}';\n`;

const angularCode = (name) => `import { Component, input, output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'erb-${name.toLowerCase()}',
  standalone: true,
  template: \`<input type="${name === 'TimePicker' ? 'time' : 'date'}" [attr.data-size]="size()" class="erb-${name.toLowerCase()}-input" (input)="onInput($event)" (blur)="onTouched()" [value]="value" [disabled]="disabled">\`,
  host: {
    class: 'erb-${name.toLowerCase()}'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Erb${name}Component),
      multi: true
    }
  ]
})
export class Erb${name}Component implements ControlValueAccessor {
  size = input<'sm' | 'md' | 'lg'>('md');
  value: string = '';
  disabled: boolean = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value || '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  
  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
  }
}
`;

const angularDateRangeCode = `import { Component, input, output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'erb-daterangepicker',
  standalone: true,
  template: \`
    <input type="date" class="erb-daterangepicker-start" [value]="value?.start || ''" (input)="onStartInput($event)" [disabled]="disabled">
    <span class="erb-daterangepicker-separator">-</span>
    <input type="date" class="erb-daterangepicker-end" [value]="value?.end || ''" (input)="onEndInput($event)" [disabled]="disabled">
  \`,
  host: {
    class: 'erb-daterangepicker',
    '[attr.data-size]': 'size()'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ErbDateRangePickerComponent),
      multi: true
    }
  ]
})
export class ErbDateRangePickerComponent implements ControlValueAccessor {
  size = input<'sm' | 'md' | 'lg'>('md');
  value: { start?: string, end?: string } = {};
  disabled: boolean = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value || {};
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  
  onStartInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value = { ...this.value, start: val };
    this.onChange(this.value);
  }
  
  onEndInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value = { ...this.value, end: val };
    this.onChange(this.value);
  }
}
`;


const angularTest = (name) => `import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Erb${name}Component } from './${name.toLowerCase()}.component';

describe('Erb${name}Component', () => {
  let component: Erb${name}Component;
  let fixture: ComponentFixture<Erb${name}Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Erb${name}Component]
    }).compileComponents();

    fixture = TestBed.createComponent(Erb${name}Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
`;

const angularStories = (name) => `import { Meta, StoryObj } from '@storybook/angular';
import { Erb${name}Component } from './${name.toLowerCase()}.component';

const meta: Meta<Erb${name}Component> = {
  title: 'Components/${name}',
  component: Erb${name}Component,
};

export default meta;
type Story = StoryObj<Erb${name}Component>;

export const Default: Story = {
  args: {},
};
`;

const angularIndex = (name) => `export * from './${name.toLowerCase()}.component';\n`;

const cssContent = (name) => `.erb-${name.toLowerCase()} {
  display: inline-flex;
  border: 1px solid var(--erb-color-border-default, #ccc);
  border-radius: var(--erb-radius-md, 4px);
  padding: var(--erb-spacing-2, 8px);
  font-family: inherit;
  font-size: var(--erb-font-size-md, 1rem);
  color: var(--erb-color-text-default, #333);
  background-color: var(--erb-color-bg-default, #fff);
}

.erb-${name.toLowerCase()}:focus-within {
  outline: 2px solid var(--erb-color-primary, #007bff);
  outline-offset: 2px;
}
`;

const cssDateRangeContent = `.erb-daterangepicker {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--erb-color-border-default, #ccc);
  border-radius: var(--erb-radius-md, 4px);
  padding: var(--erb-spacing-2, 8px);
  background-color: var(--erb-color-bg-default, #fff);
  gap: var(--erb-spacing-2, 8px);
}

.erb-daterangepicker-start,
.erb-daterangepicker-end {
  border: none;
  outline: none;
  font-family: inherit;
  font-size: var(--erb-font-size-md, 1rem);
  color: var(--erb-color-text-default, #333);
  background: transparent;
}

.erb-daterangepicker:focus-within {
  outline: 2px solid var(--erb-color-primary, #007bff);
  outline-offset: 2px;
}
`;

const write = (p, content) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf8');
};

const components = ['DatePicker', 'DateRangePicker', 'TimePicker'];

components.forEach(name => {
  // React
  if (name === 'DateRangePicker') {
    write(\`\${basePath}/packages/react/src/\${name}/\${name}.tsx\`, reactDateRangeCode);
  } else {
    write(\`\${basePath}/packages/react/src/\${name}/\${name}.tsx\`, reactCode(name));
  }
  write(\`\${basePath}/packages/react/src/\${name}/\${name}.test.tsx\`, reactTest(name));
  write(\`\${basePath}/packages/react/src/\${name}/\${name}.stories.tsx\`, reactStories(name));
  write(\`\${basePath}/packages/react/src/\${name}/index.ts\`, reactIndex(name));

  // Angular
  if (name === 'DateRangePicker') {
    write(\`\${basePath}/packages/angular/src/\${name}/\${name.toLowerCase()}.component.ts\`, angularDateRangeCode);
  } else {
    write(\`\${basePath}/packages/angular/src/\${name}/\${name.toLowerCase()}.component.ts\`, angularCode(name));
  }
  write(\`\${basePath}/packages/angular/src/\${name}/\${name.toLowerCase()}.component.spec.ts\`, angularTest(name));
  write(\`\${basePath}/packages/angular/src/\${name}/\${name.toLowerCase()}.stories.ts\`, angularStories(name));
  write(\`\${basePath}/packages/angular/src/\${name}/index.ts\`, angularIndex(name));

  // CSS
  if (name === 'DateRangePicker') {
    write(\`\${basePath}/packages/core/src/components/\${name.toLowerCase()}.css\`, cssDateRangeContent);
  } else {
    write(\`\${basePath}/packages/core/src/components/\${name.toLowerCase()}.css\`, cssContent(name));
  }
});

console.log('done');
