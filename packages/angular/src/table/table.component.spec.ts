import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ErbTableComponent, ErbTableHeadComponent, ErbTableBodyComponent, ErbTableRowComponent, ErbTableCellComponent, ErbTableHeaderCellComponent } from './table.component';

@Component({
  template: `
    <erb-table>
      <erb-table-head><erb-table-row><erb-table-header-cell>Header</erb-table-header-cell></erb-table-row></erb-table-head>
      <erb-table-body><erb-table-row><erb-table-cell>Data</erb-table-cell></erb-table-row></erb-table-body>
    </erb-table>
  `,
  standalone: true,
  imports: [ErbTableComponent, ErbTableHeadComponent, ErbTableBodyComponent, ErbTableRowComponent, ErbTableCellComponent, ErbTableHeaderCellComponent]
})
class TestHostComponent {}

describe('ErbTableComponent', () => {
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

  it('should create and render elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('erb-table')).toBeTruthy();
    expect(compiled.textContent).toContain('Header');
    expect(compiled.textContent).toContain('Data');
  });
});
