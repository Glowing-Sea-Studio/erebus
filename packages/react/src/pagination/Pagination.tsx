export interface PaginationProps { currentPage: number; totalPages: number; onPageChange: (page: number) => void; }

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => (
  <nav aria-label="Pagination">
    <ul className="erb-pagination">
      {Array.from({ length: totalPages }).map((_, i) => (
        <li key={i} className="erb-pagination__item">
          <button aria-current={currentPage === i + 1 ? 'page' : undefined} onClick={() => onPageChange(i + 1)}>{i + 1}</button>
        </li>
      ))}
    </ul>
  </nav>
);
