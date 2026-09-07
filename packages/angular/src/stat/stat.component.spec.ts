import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErbStatComponent } from './stat.component';

describe('ErbStatComponent', () => {
  let fixture: ComponentFixture<ErbStatComponent>;
  let component: ErbStatComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErbStatComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ErbStatComponent);
    component = fixture.componentInstance;
    
    fixture.componentRef.setInput('label', 'Test Label');
    fixture.componentRef.setInput('value', '123');
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label and value', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.erb-stat-label')?.textContent).toBe('Test Label');
    expect(el.querySelector('.erb-stat-value')?.textContent).toBe('123');
  });
});
