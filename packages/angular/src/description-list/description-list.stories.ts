import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ErbDescriptionListComponent, ErbDescriptionTermComponent, ErbDescriptionDetailsComponent } from './description-list.component';

const meta: Meta<ErbDescriptionListComponent> = {
  title: 'Components/DescriptionList',
  component: ErbDescriptionListComponent,
  decorators: [
    moduleMetadata({
      imports: [ErbDescriptionListComponent, ErbDescriptionTermComponent, ErbDescriptionDetailsComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<ErbDescriptionListComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-description-list>
        <erb-description-term>Name</erb-description-term>
        <erb-description-details>Erebus</erb-description-details>
        <erb-description-term>Version</erb-description-term>
        <erb-description-details>1.0.0</erb-description-details>
      </erb-description-list>
    `
  }),
};
