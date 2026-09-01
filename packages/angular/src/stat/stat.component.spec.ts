import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErbStatComponent } from './stat.component';

describe('ErbStatComponent', () => {
  let component: ErbStatComponent;
  let fixture: ComponentFixture<ErbStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErbStatComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErbStatComponent);
    component = fixture.componentInstance;
    component.label = 'Users';
    component.value = '1,024';
    component.helpText = '+5%';
    fixture.detectChanges();
  });

  it('should render correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Users');
    expect(compiled.textContent).toContain('1,024');
    expect(compiled.textContent).toContain('+5%');
  });
});
