import { render } from '@testing-library/react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell } from './Table';

describe('Table', () => {
  it('renders correctly', () => {
    const { getByText, container } = render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Header</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(getByText('Header')).toBeInTheDocument();
    expect(getByText('Data')).toBeInTheDocument();
    expect(container.querySelector('.erb-table')).toBeInTheDocument();
  });
});
