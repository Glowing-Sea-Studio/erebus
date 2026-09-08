import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureGridComponent } from './featuregrid.component';

describe('FeatureGridComponent', () => {
  let fixture: ComponentFixture<FeatureGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureGridComponent]
    }).compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(FeatureGridComponent);
    fixture.componentRef.setInput('features', []);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
