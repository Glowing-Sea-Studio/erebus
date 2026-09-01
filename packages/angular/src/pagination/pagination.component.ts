import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-pagination',
  template: `
    <nav aria-label="Pagination">
      <ul class="erb-pagination">
        <li *ngFor="let page of pages" class="erb-pagination__item">
          <button [attr.aria-current]="currentPage === page ? 'page' : null" (click)="onPageChange.emit(page)">{{ page }}</button>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['../../../../packages/core/src/components/pagination.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PaginationComponent {
  @Input() currentPage = 1;
  @Input() totalPages = 1;
  @Output() onPageChange = new EventEmitter<number>();
  get pages() { return Array.from({ length: this.totalPages }, (_, i) => i + 1); }
}
