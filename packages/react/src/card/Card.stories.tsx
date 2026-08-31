import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from './index';

const meta = {
  title: 'React/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardBody>
        <p>Main content of the card.</p>
      </CardBody>
      <CardFooter>
        <button className="erb-button" data-variant="solid" data-size="md">Action</button>
      </CardFooter>
    </Card>
  )
};
