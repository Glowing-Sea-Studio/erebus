import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatComponent } from './stat.component';

describe('StatComponent', () => {
  let fixture: ComponentFixture<StatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatComponent);
    fixture.componentRef.setInput('label', 'Users');
    fixture.componentRef.setInput('value', '1,024');
    fixture.componentRef.setInput('helpText', '+5%');
    fixture.detectChanges();
  });

  it('should render correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Users');
    expect(compiled.textContent).toContain('1,024');
    expect(compiled.textContent).toContain('+5%');
  });
});
