import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoCloudComponent } from './logocloud.component';

describe('LogoCloudComponent', () => {
  let fixture: ComponentFixture<LogoCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoCloudComponent]
    }).compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(LogoCloudComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
