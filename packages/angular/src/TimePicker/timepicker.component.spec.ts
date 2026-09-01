import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErbTimePickerComponent } from './timepicker.component';

describe('ErbTimePickerComponent', () => {
  let component: ErbTimePickerComponent;
  let fixture: ComponentFixture<ErbTimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErbTimePickerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ErbTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
