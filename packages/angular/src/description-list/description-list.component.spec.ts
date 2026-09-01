import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ErbDescriptionListComponent, ErbDescriptionTermComponent, ErbDescriptionDetailsComponent } from './description-list.component';

@Component({
  template: `
    <erb-description-list>
      <erb-description-term>Term</erb-description-term>
      <erb-description-details>Details</erb-description-details>
    </erb-description-list>
  `,
  standalone: true,
  imports: [ErbDescriptionListComponent, ErbDescriptionTermComponent, ErbDescriptionDetailsComponent]
})
class TestHostComponent {}

describe('ErbDescriptionListComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should render correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.erb-description-list')).toBeTruthy();
    expect(compiled.textContent).toContain('Term');
    expect(compiled.textContent).toContain('Details');
  });
});
