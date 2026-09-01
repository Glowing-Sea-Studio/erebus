import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErbDateRangePickerComponent } from './daterangepicker.component';

describe('ErbDateRangePickerComponent', () => {
  let component: ErbDateRangePickerComponent;
  let fixture: ComponentFixture<ErbDateRangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErbDateRangePickerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ErbDateRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
