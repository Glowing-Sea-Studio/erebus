import React from 'react';
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}
export const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { className = '', ...rest } = props;
  return <table ref={ref} className={`erb-table ${className}`} {...rest} />;
});
Table.displayName = 'Table';

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
export const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>((props, ref) => <thead ref={ref} {...props} />);
TableHead.displayName = 'TableHead';

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => <tbody ref={ref} {...props} />);
TableBody.displayName = 'TableBody';

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}
export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => <tr ref={ref} {...props} />);
TableRow.displayName = 'TableRow';

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}
export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>((props, ref) => <td ref={ref} {...props} />);
TableCell.displayName = 'TableCell';

export interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}
export const TableHeaderCell = React.forwardRef<HTMLTableCellElement, TableHeaderCellProps>((props, ref) => <th ref={ref} {...props} />);
TableHeaderCell.displayName = 'TableHeaderCell';
