import { Meta, StoryObj } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

const meta: Meta<AccordionComponent> = { title: 'Components/Accordion', component: AccordionComponent };
export default meta;
type Story = StoryObj<AccordionComponent>;

export const Default: Story = { args: {
  title: 'Title'
} };
