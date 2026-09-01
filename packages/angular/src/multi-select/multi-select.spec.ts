import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSelectComponent } from './multi-select.component';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    component.options = [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display selected tags', () => {
    component.value = ['react'];
    expect(component.selectedOptions.length).toBe(1);
    expect(component.selectedOptions[0].value).toBe('react');
  });

  it('should add an option', () => {
    spyOn(component.valueChange, 'emit');
    component.selectOption('vue');
    expect(component.value).toContain('vue');
    expect(component.valueChange.emit).toHaveBeenCalledWith(['vue']);
  });

  it('should remove an option', () => {
    component.value = ['react', 'vue'];
    spyOn(component.valueChange, 'emit');
    component.removeOption('react');
    expect(component.value).not.toContain('react');
    expect(component.value).toContain('vue');
    expect(component.valueChange.emit).toHaveBeenCalledWith(['vue']);
  });
});
