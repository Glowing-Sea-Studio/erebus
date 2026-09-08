import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FAQComponent } from './FAQ.component';

describe('FAQComponent', () => {
  let fixture: ComponentFixture<FAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAQComponent]
    }).compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(FAQComponent);
    fixture.componentRef.setInput('items', []);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
