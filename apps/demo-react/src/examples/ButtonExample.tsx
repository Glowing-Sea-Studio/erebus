import { Button, Badge, Tag, Heading } from '@glowing-sea-studio/erebus-react';

export default function ButtonExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <section>
        <Heading level={3}>Buttons</Heading>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '1rem' }}>
          <Button variant="solid" color="primary">Primary Solid</Button>
          <Button variant="outline" color="neutral">Neutral Outline</Button>
          <Button variant="ghost" color="danger">Danger Ghost</Button>
        </div>
      </section>

      <section>
        <Heading level={3}>Badges & Tags</Heading>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '1rem' }}>
          <Badge color="success">Success Badge</Badge>
          <Badge color="warning">Warning Badge</Badge>
          <Tag>Default Tag</Tag>
        </div>
      </section>
    </div>
  );
}
