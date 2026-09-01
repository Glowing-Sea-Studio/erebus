// @ts-nocheck
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ErbTableComponent, ErbTableHeadComponent, ErbTableBodyComponent, ErbTableRowComponent, ErbTableCellComponent, ErbTableHeaderCellComponent } from './table.component';

const meta: Meta<ErbTableComponent> = {
  title: 'Components/Table',
  component: ErbTableComponent,
  decorators: [
    moduleMetadata({
      imports: [ErbTableComponent, ErbTableHeadComponent, ErbTableBodyComponent, ErbTableRowComponent, ErbTableCellComponent, ErbTableHeaderCellComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<ErbTableComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-table>
        <erb-table-head>
          <erb-table-row>
            <erb-table-header-cell>Name</erb-table-header-cell>
            <erb-table-header-cell>Role</erb-table-header-cell>
          </erb-table-row>
        </erb-table-head>
        <erb-table-body>
          <erb-table-row>
            <erb-table-cell>Alice</erb-table-cell>
            <erb-table-cell>Admin</erb-table-cell>
          </erb-table-row>
          <erb-table-row>
            <erb-table-cell>Bob</erb-table-cell>
            <erb-table-cell>User</erb-table-cell>
          </erb-table-row>
        </erb-table-body>
      </erb-table>
    `
  }),
};
