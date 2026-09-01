import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PinInputComponent } from './pin-input.component';
import { By } from '@angular/platform-browser';

describe('PinInputComponent', () => {
  let component: PinInputComponent;
  let fixture: ComponentFixture<PinInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinInputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PinInputComponent);
    component = fixture.componentInstance;
    component.length = 4;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render inputs correctly', () => {
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    expect(inputs.length).toBe(4);
  });
});
