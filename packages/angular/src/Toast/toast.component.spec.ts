import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';

describe('ToastComponent', () => {
  let fixture: ComponentFixture<ToastComponent>;
  let service: ToastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponent],
      providers: [ToastService]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    service = TestBed.inject(ToastService);
    fixture.detectChanges();
  });

  it('should show and hide toast', fakeAsync(() => {
    service.show('Test Toast');
    fixture.detectChanges();
    
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Test Toast');
    
    tick(3000);
    fixture.detectChanges();
    
    expect(element.textContent).not.toContain('Test Toast');
  }));
});