import { Alert, AlertTitle, AlertDescription, Spinner, Skeleton, Avatar, AvatarGroup, Text, Progress, Heading } from '@glowing-sea-studio/erebus-react';

export default function FeedbackDisplayExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <section>
        <Heading level={3}>Alerts</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <Alert intent="info">
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>This is an informational alert.</AlertDescription>
          </Alert>
        </div>
      </section>

      <section>
        <Heading level={3}>Loading & Placeholders</Heading>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginTop: '1rem' }}>
          <Spinner size="md" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
            <Skeleton style={{ height: '20px', width: '100%' }} />
            <Skeleton style={{ height: '20px', width: '80%' }} />
          </div>
        </div>
      </section>

      <section>
        <Heading level={3}>Avatars</Heading>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginTop: '1rem' }}>
          <AvatarGroup>
            <Avatar src="https://i.pravatar.cc/150?u=1" name="User 1" />
            <Avatar src="https://i.pravatar.cc/150?u=2" name="User 2" />
            <Avatar src="https://i.pravatar.cc/150?u=3" name="User 3" />
          </AvatarGroup>
        </div>
      </section>

      <section>
        <Heading level={3}>Progress</Heading>
        <div style={{ marginTop: '1rem' }}>
          <Text>Progress</Text>
          <Progress value={60} />
        </div>
      </section>
    </div>
  );
}
