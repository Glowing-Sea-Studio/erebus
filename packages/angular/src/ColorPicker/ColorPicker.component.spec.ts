import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPickerComponent } from './ColorPicker.component';
import { By } from '@angular/platform-browser';

describe('ColorPickerComponent', () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render with default value', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(input.value).toBe('#000000');
  });

  it('should emit value on input change', () => {
    jest.spyOn(component.valueChange, 'emit');
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    
    input.value = '#ff0000';
    input.dispatchEvent(new Event('input'));
    
    expect(component.valueChange.emit).toHaveBeenCalledWith('#ff0000');
  });
});
