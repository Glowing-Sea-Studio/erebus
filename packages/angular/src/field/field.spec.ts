import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ErbFieldComponent } from './field.component';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <erb-field [label]="label" [hint]="hint" [error]="error" [horizontal]="horizontal">
      <input type="text" data-testid="input" />
    </erb-field>
  `,
  standalone: true,
  imports: [ErbFieldComponent]
})
class TestHostComponent {
  label = 'Test Label';
  hint = 'Test Hint';
  error = '';
  horizontal = false;
}

describe('ErbFieldComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, ErbFieldComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label and hint', () => {
    const labelElement = fixture.debugElement.query(By.css('erb-label')).nativeElement;
    expect(labelElement.textContent).toContain('Test Label');
    
    const hintElement = fixture.debugElement.query(By.css('.erb-field__hint')).nativeElement;
    expect(hintElement.textContent.trim()).toBe('Test Hint');
  });

  it('should render error instead of hint', () => {
    component.error = 'Test Error';
    fixture.detectChanges();
    
    const errorElement = fixture.debugElement.query(By.css('.erb-field__error')).nativeElement;
    expect(errorElement.textContent.trim()).toBe('Test Error');
    
    const hintElement = fixture.debugElement.query(By.css('.erb-field__hint'));
    expect(hintElement).toBeNull();
  });

  it('should apply horizontal class', () => {
    component.horizontal = true;
    fixture.detectChanges();
    
    const fieldElement = fixture.debugElement.query(By.css('.erb-field')).nativeElement;
    expect(fieldElement.classList.contains('erb-field--horizontal')).toBe(true);
  });
});
