import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComboboxComponent } from './combobox.component';

describe('ComboboxComponent', () => {
  let component: ComboboxComponent;
  let fixture: ComponentFixture<ComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComboboxComponent);
    component = fixture.componentInstance;
    component.options = [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter options based on input', () => {
    component.inputValue = 'app';
    expect(component.filteredOptions.length).toBe(1);
    expect(component.filteredOptions[0]?.value).toBe('apple');
  });

  it('should select an option', () => {
    vi.spyOn(component.valueChange, 'emit');
    component.selectOption('apple');
    expect(component.value).toBe('apple');
    expect(component.inputValue).toBe('Apple');
    expect(component.valueChange.emit).toHaveBeenCalledWith('apple');
  });
});
