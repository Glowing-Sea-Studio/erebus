import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';
import { By } from '@angular/platform-browser';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    component.images = [
      { src: 'test1.jpg', alt: 'img1' },
      { src: 'test2.jpg', alt: 'img2' }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render images', () => {
    const images = fixture.debugElement.queryAll(By.css('img'));
    expect(images.length).toBe(2);
  });

  it('should go to next image on click', () => {
    const nextBtn = fixture.debugElement.queryAll(By.css('.erb-carousel-btn'))[1]?.nativeElement;
    nextBtn.click();
    expect(component.currentIndex).toBe(1);
  });
});
