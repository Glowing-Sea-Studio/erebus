import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';
import { By } from '@angular/platform-browser';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    component.images = [{ src: 'test.jpg', alt: 'Test' }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render image', () => {
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement.src).toContain('test.jpg');
    expect(imgElement.alt).toBe('Test');
  });

  it('should emit click event', () => {
    vi.spyOn(component.imageClick, 'emit');
    const item = fixture.debugElement.query(By.css('.erb-gallery-item')).nativeElement;
    item.click();
    expect(component.imageClick.emit).toHaveBeenCalledWith(0);
  });
});
