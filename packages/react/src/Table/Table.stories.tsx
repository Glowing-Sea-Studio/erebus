import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell } from './Table';

export default { title: 'Components/Table', component: Table };

export const Default = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Role</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Alice</TableCell>
        <TableCell>Admin</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Bob</TableCell>
        <TableCell>User</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
