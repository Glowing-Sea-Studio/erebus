import { ComponentPreview } from '../docs/ComponentPreview';
import FeedbackDisplayExample from '../examples/FeedbackDisplayExample';
import feedbackDisplayExampleCode from '../examples/FeedbackDisplayExample.tsx?raw';

export function FeedbackDisplayPage() {
  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--erb-color-neutral-fg)' }}>Feedback & Display</h1>
      <p style={{ color: 'var(--erb-color-fg-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
        Components used to provide feedback to the user or display data effectively.
      </p>

      <ComponentPreview
        title="Feedback & Display Components"
        description="A showcase of alerts, spinners, skeletons, avatars, and progress bars."
        code={feedbackDisplayExampleCode}
      >
        <FeedbackDisplayExample />
      </ComponentPreview>
    </div>
  );
}
