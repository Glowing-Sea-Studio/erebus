import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ErbListComponent, ErbListItemComponent } from './list.component';

@Component({
  template: `
    <erb-list [as]="type">
      <erb-list-item>Item</erb-list-item>
    </erb-list>
  `,
  standalone: true,
  imports: [ErbListComponent, ErbListItemComponent]
})
class TestHostComponent {
  type: 'ul' | 'ol' = 'ul';
}

describe('ErbListComponent', () => {
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

  it('should create unordered list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.erb-list--unordered')).toBeTruthy();
    expect(compiled.textContent).toContain('Item');
  });

  it('should create ordered list', () => {
    fixture.componentInstance.type = 'ol';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.erb-list--ordered')).toBeTruthy();
  });
});
