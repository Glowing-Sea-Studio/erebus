import { Breadcrumb, Card, CardHeader, CardTitle, CardBody, CardFooter, Button, Text, Heading } from '@glowing-sea-studio/erebus-react';

export default function LayoutNavigationExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <section>
        <Heading level={3}>Breadcrumbs</Heading>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Breadcrumb>
            <a href="#" style={{ color: 'var(--erb-color-primary-base)', textDecoration: 'none' }}>Home</a>
            <a href="#" style={{ color: 'var(--erb-color-primary-base)', textDecoration: 'none' }}>Components</a>
            <span style={{ color: 'var(--erb-color-fg-muted)' }} aria-current="page">Breadcrumb</span>
          </Breadcrumb>
        </div>
      </section>

      <section>
        <Heading level={3}>Cards</Heading>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardBody>
              <Text>Card body content goes here. It provides a flexible container.</Text>
            </CardBody>
            <CardFooter>
              <Button variant="solid" color="primary">Action</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
