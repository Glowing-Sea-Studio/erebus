import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureGridComponent } from './featuregrid.component';

describe('FeatureGridComponent', () => {
  let component: FeatureGridComponent;
  let fixture: ComponentFixture<FeatureGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureGridComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
