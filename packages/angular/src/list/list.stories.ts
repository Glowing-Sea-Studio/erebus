// @ts-nocheck
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ErbListComponent, ErbListItemComponent } from './list.component';

const meta: Meta<ErbListComponent> = {
  title: 'Components/List',
  component: ErbListComponent,
  decorators: [
    moduleMetadata({
      imports: [ErbListComponent, ErbListItemComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<ErbListComponent>;

export const Unordered: Story = {
  render: () => ({
    template: `
      <erb-list>
        <erb-list-item>Apples</erb-list-item>
        <erb-list-item>Bananas</erb-list-item>
      </erb-list>
    `
  }),
};

export const Ordered: Story = {
  render: () => ({
    template: `
      <erb-list as="ol">
        <erb-list-item>First</erb-list-item>
        <erb-list-item>Second</erb-list-item>
      </erb-list>
    `
  }),
};
