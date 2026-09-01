import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingComponent } from './rating.component';
import { By } from '@angular/platform-browser';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    component.value = 3;
    component.max = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render stars correctly', () => {
    const stars = fixture.debugElement.queryAll(By.css('.erb-rating__item'));
    expect(stars.length).toBe(5);
    expect(stars[0].classes['erb-rating__item--active']).toBeTrue();
    expect(stars[2].classes['erb-rating__item--active']).toBeTrue();
    expect(stars[3].classes['erb-rating__item--active']).toBeFalsy();
  });

  it('should handle keyboard navigation', () => {
    spyOn(component.valueChange, 'emit');
    
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    fixture.debugElement.triggerEventHandler('keydown', event);
    
    expect(component.value).toBe(4);
    expect(component.valueChange.emit).toHaveBeenCalledWith(4);
  });
});
