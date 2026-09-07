import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestimonialComponent } from './testimonial.component';

describe('TestimonialComponent', () => {
  let fixture: ComponentFixture<TestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(TestimonialComponent);
    fixture.componentRef.setInput('quote', 'q1');
    fixture.componentRef.setInput('author', 'a1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
