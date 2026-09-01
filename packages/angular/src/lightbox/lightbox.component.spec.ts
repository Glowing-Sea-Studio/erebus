import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LightboxComponent } from './lightbox.component';
import { By } from '@angular/platform-browser';

describe('LightboxComponent', () => {
  let component: LightboxComponent;
  let fixture: ComponentFixture<LightboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightboxComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LightboxComponent);
    component = fixture.componentInstance;
    component.isOpen = true;
    component.imageSrc = 'test.jpg';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render image if open', () => {
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement.src).toContain('test.jpg');
  });

  it('should emit close on button click', () => {
    spyOn(component.close, 'emit');
    const closeBtn = fixture.debugElement.query(By.css('.erb-lightbox-close')).nativeElement;
    closeBtn.click();
    expect(component.close.emit).toHaveBeenCalled();
  });
});
