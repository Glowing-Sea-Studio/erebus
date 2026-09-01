import { Meta, StoryObj } from '@storybook/angular';
import { PaginationComponent } from './pagination.component';

const meta: Meta<PaginationComponent> = { title: 'Components/Pagination', component: PaginationComponent };
export default meta;
type Story = StoryObj<PaginationComponent>;

export const Default: Story = { args: {
  currentPage: 1, totalPages: 3
} };
