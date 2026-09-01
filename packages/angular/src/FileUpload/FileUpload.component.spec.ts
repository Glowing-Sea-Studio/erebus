import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileUploadComponent } from './FileUpload.component';
import { By } from '@angular/platform-browser';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render default text', () => {
    const span = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(span.textContent).toContain('Drag & Drop files here or click to browse');
  });

  it('should update drag state on dragenter and dragleave', () => {
    const div = fixture.debugElement.query(By.css('.erb-file-upload'));
    
    div.triggerEventHandler('dragenter', {
      preventDefault: () => {},
      stopPropagation: () => {}
    });
    fixture.detectChanges();
    expect(component.isDragActive).toBe(true);
    
    div.triggerEventHandler('dragleave', {
      preventDefault: () => {},
      stopPropagation: () => {}
    });
    fixture.detectChanges();
    expect(component.isDragActive).toBe(false);
  });
});
