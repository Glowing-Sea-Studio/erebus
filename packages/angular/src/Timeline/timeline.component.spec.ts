import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelineComponent, TimelineItemComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineComponent, TimelineItemComponent]
    }).compileComponents();
  });

  it('should create TimelineComponent', () => {
    fixture = TestBed.createComponent(TimelineComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should create TimelineItemComponent', () => {
    const itemFixture = TestBed.createComponent(TimelineItemComponent);
    itemFixture.componentRef.setInput('title', 'Test');
    itemFixture.detectChanges();
    expect(itemFixture.componentInstance).toBeTruthy();
  });
});
