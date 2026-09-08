import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CTAComponent } from './cta.component';

describe('CTAComponent', () => {
  let fixture: ComponentFixture<CTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTAComponent]
    }).compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(CTAComponent);
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
