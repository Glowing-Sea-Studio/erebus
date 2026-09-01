import os

base_path = '/media/thibault/SSD_DATA/DEV/workspaces/Glowing Sea Studio/APPS/erebus'

def write(p, content):
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w') as f:
        f.write(content)

def react_code(name, lc_name, type_):
    return f"""import React from 'react';

export interface {name}Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {{
  size?: 'sm' | 'md' | 'lg';
}}

export const {name} = React.forwardRef<HTMLInputElement, {name}Props>(
  ({{ className = '', size = 'md', ...props }}, ref) => {{
    return (
      <input
        ref={{ref}}
        type="{type_}"
        className={{`erb-{lc_name} ${{className}}`}}
        data-size={{size}}
        {{...props}}
      />
    );
  }}
);

{name}.displayName = '{name}';
"""

def angular_code(name, lc_name, type_):
    return f"""import {{ Component, input, forwardRef }} from '@angular/core';
import {{ NG_VALUE_ACCESSOR, ControlValueAccessor }} from '@angular/forms';

@Component({{
  selector: 'erb-{lc_name}',
  standalone: true,
  template: `<input type="{type_}" [attr.data-size]="size()" class="erb-{lc_name}-input" (input)="onInput($event)" (blur)="onTouched()" [value]="value" [disabled]="disabled">`,
  host: {{
    class: 'erb-{lc_name}'
  }},
  providers: [
    {{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Erb{name}Component),
      multi: true
    }}
  ]
}})
export class Erb{name}Component implements ControlValueAccessor {{
  size = input<'sm' | 'md' | 'lg'>('md');
  value: string = '';
  disabled: boolean = false;

  onChange: any = () => {{}};
  onTouched: any = () => {{}};

  writeValue(value: any): void {{
    this.value = value || '';
  }}
  registerOnChange(fn: any): void {{
    this.onChange = fn;
  }}
  registerOnTouched(fn: any): void {{
    this.onTouched = fn;
  }}
  setDisabledState?(isDisabled: boolean): void {{
    this.disabled = isDisabled;
  }}
  
  onInput(event: Event) {{
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
  }}
}}
"""

react_daterange = """import React from 'react';

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
      <div ref={ref} className={`erb-daterangepicker ${className}`} data-size={size} {...props}>
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
"""

def react_test(name):
    return f"""import React from 'react';
import {{ render }} from '@testing-library/react';
import {{ {name} }} from './{name}';

describe('{name}', () => {{
  it('renders correctly', () => {{
    const {{ container }} = render(<{name} />);
    expect(container.firstChild).toBeInTheDocument();
  }});
}});
"""

def react_story(name):
    return f"""import React from 'react';
import type {{ Meta, StoryObj }} from '@storybook/react';
import {{ {name} }} from './{name}';

const meta: Meta<typeof {name}> = {{
  title: 'Components/{name}',
  component: {name},
}};

export default meta;
type Story = StoryObj<typeof {name}>;

export const Default: Story = {{
  args: {{}},
}};
"""

angular_daterange = """import { Component, input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'erb-daterangepicker',
  standalone: true,
  template: `
    <input type="date" class="erb-daterangepicker-start" [value]="value?.start || ''" (input)="onStartInput($event)" [disabled]="disabled">
    <span class="erb-daterangepicker-separator">-</span>
    <input type="date" class="erb-daterangepicker-end" [value]="value?.end || ''" (input)="onEndInput($event)" [disabled]="disabled">
  `,
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
"""

def angular_test(name, lc_name):
    return f"""import {{ ComponentFixture, TestBed }} from '@angular/core/testing';
import {{ Erb{name}Component }} from './{lc_name}.component';

describe('Erb{name}Component', () => {{
  let component: Erb{name}Component;
  let fixture: ComponentFixture<Erb{name}Component>;

  beforeEach(async () => {{
    await TestBed.configureTestingModule({{
      imports: [Erb{name}Component]
    }}).compileComponents();

    fixture = TestBed.createComponent(Erb{name}Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }});

  it('should create', () => {{
    expect(component).toBeTruthy();
  }});
}});
"""

def angular_story(name, lc_name):
    return f"""import {{ Meta, StoryObj }} from '@storybook/angular';
import {{ Erb{name}Component }} from './{lc_name}.component';

const meta: Meta<Erb{name}Component> = {{
  title: 'Components/{name}',
  component: Erb{name}Component,
}};

export default meta;
type Story = StoryObj<Erb{name}Component>;

export const Default: Story = {{
  args: {{}},
}};
"""

def css_content(lc_name):
    return f""".erb-{lc_name} {{
  display: inline-flex;
  border: 1px solid var(--erb-color-border-default, #ccc);
  border-radius: var(--erb-radius-md, 4px);
  padding: var(--erb-spacing-2, 8px);
  font-family: inherit;
  font-size: var(--erb-font-size-md, 1rem);
  color: var(--erb-color-text-default, #333);
  background-color: var(--erb-color-bg-default, #fff);
}}

.erb-{lc_name}:focus-within {{
  outline: 2px solid var(--erb-color-primary, #007bff);
  outline-offset: 2px;
}}
"""

css_daterange = """.erb-daterangepicker {
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
"""

components = ['DatePicker', 'DateRangePicker', 'TimePicker']

for name in components:
    lc_name = name.lower()
    type_ = 'time' if name == 'TimePicker' else 'date'
    
    # React
    r_dir = f'{base_path}/packages/react/src/{name}'
    if name == 'DateRangePicker':
        write(f'{r_dir}/{name}.tsx', react_daterange)
    else:
        write(f'{r_dir}/{name}.tsx', react_code(name, lc_name, type_))
    write(f'{r_dir}/{name}.test.tsx', react_test(name))
    write(f'{r_dir}/{name}.stories.tsx', react_story(name))
    write(f'{r_dir}/index.ts', f"export * from './{name}';\n")
    
    # Angular
    a_dir = f'{base_path}/packages/angular/src/{name}'
    if name == 'DateRangePicker':
        write(f'{a_dir}/{lc_name}.component.ts', angular_daterange)
    else:
        write(f'{a_dir}/{lc_name}.component.ts', angular_code(name, lc_name, type_))
    write(f'{a_dir}/{lc_name}.component.spec.ts', angular_test(name, lc_name))
    write(f'{a_dir}/{lc_name}.stories.ts', angular_story(name, lc_name))
    write(f'{a_dir}/index.ts', f"export * from './{lc_name}.component';\n")
    
    # CSS
    c_dir = f'{base_path}/packages/core/src/components'
    if name == 'DateRangePicker':
        write(f'{c_dir}/{lc_name}.css', css_daterange)
    else:
        write(f'{c_dir}/{lc_name}.css', css_content(lc_name))

print("done")
