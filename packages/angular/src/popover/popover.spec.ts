import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErbPopoverComponent } from './popover.component';

describe('ErbPopoverComponent', () => {
  let component: ErbPopoverComponent;
  let fixture: ComponentFixture<ErbPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErbPopoverComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ErbPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct class', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.classList.contains('erb-popover')).toBe(true);
  });
});
