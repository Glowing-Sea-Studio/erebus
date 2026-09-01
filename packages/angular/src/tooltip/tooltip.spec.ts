import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErbTooltipComponent } from './tooltip.component';

describe('ErbTooltipComponent', () => {
  let component: ErbTooltipComponent;
  let fixture: ComponentFixture<ErbTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErbTooltipComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ErbTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct class and role', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.classList.contains('erb-tooltip')).toBe(true);
    expect(el.getAttribute('role')).toBe('tooltip');
  });
});
