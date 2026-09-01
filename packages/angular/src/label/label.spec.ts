import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ErbLabelComponent } from './label.component';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <erb-label [disabled]="disabled" [required]="required">Test Label</erb-label>
  `,
  standalone: true,
  imports: [ErbLabelComponent]
})
class TestHostComponent {
  disabled = false;
  required = false;
}

describe('ErbLabelComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, ErbLabelComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render content', () => {
    const labelElement = fixture.debugElement.query(By.css('.erb-label')).nativeElement;
    expect(labelElement.textContent.trim()).toBe('Test Label');
  });

  it('should apply disabled class', () => {
    component.disabled = true;
    fixture.detectChanges();
    const labelElement = fixture.debugElement.query(By.css('.erb-label')).nativeElement;
    expect(labelElement.classList.contains('erb-label--disabled')).toBe(true);
  });

  it('should apply required class', () => {
    component.required = true;
    fixture.detectChanges();
    const labelElement = fixture.debugElement.query(By.css('.erb-label')).nativeElement;
    expect(labelElement.classList.contains('erb-label--required')).toBe(true);
  });
});
