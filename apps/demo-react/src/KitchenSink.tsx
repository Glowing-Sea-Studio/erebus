import { Heading, Text } from '@glowing-sea-studio/erebus-react';

export function KitchenSink() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <section>
        <Heading level={2}>All Components Extracted</Heading>
        <Text style={{ marginTop: '1rem', color: 'var(--erb-color-fg-muted)' }}>
          The components that used to be in this Kitchen Sink have been extracted into their own dedicated pages.
          Please use the sidebar to navigate to the specific component documentation.
        </Text>
      </section>
    </div>
  );
}
