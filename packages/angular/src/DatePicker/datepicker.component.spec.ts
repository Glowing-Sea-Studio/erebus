import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErbDatePickerComponent } from './datepicker.component';

describe('ErbDatePickerComponent', () => {
  let component: ErbDatePickerComponent;
  let fixture: ComponentFixture<ErbDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErbDatePickerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ErbDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
