import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoCloudComponent } from './logocloud.component';

describe('LogoCloudComponent', () => {
  let component: LogoCloudComponent;
  let fixture: ComponentFixture<LogoCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoCloudComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
