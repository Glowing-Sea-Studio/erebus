import { 
  Button, Card, CardHeader, CardTitle, CardBody, CardFooter,
  Badge, Tag, Avatar, AvatarGroup, Spinner, Skeleton, 
  Input, Textarea, Checkbox, Switch, Radio,
  Heading, Text, Alert, AlertTitle, AlertDescription,
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
  Tabs, TabsList, TabsTrigger, TabsContent, TabsPanel,
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  Progress, Slider
} from '@glowing-sea-studio/erebus-react';

export function KitchenSink() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <section>
        <Heading level={2}>Buttons & Badges</Heading>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '1rem' }}>
          <Button variant="solid" color="primary">Primary Solid</Button>
          <Button variant="outline" color="neutral">Neutral Outline</Button>
          <Button variant="ghost" color="danger">Danger Ghost</Button>
          <Badge color="success">Success Badge</Badge>
          <Badge color="warning">Warning Badge</Badge>
          <Tag>Default Tag</Tag>
        </div>
      </section>

      <section>
        <Heading level={2}>Form Controls</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', maxWidth: '400px' }}>
          <Input placeholder="Text input..." />
          <Textarea placeholder="Textarea..." />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Checkbox id="chk1" label="Checkbox 1" />
            <Checkbox id="chk2" label="Checkbox 2" defaultChecked />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Radio id="rad1" name="radio-demo" label="Radio 1" />
            <Radio id="rad2" name="radio-demo" label="Radio 2" defaultChecked />
          </div>
          <Switch id="sw1" label="Toggle switch" defaultChecked />
        </div>
      </section>

      <section>
        <Heading level={2}>Feedback & Display</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <Alert intent="info">
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>This is an informational alert.</AlertDescription>
          </Alert>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Spinner size="md" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
              <Skeleton style={{ height: '20px', width: '100%' }} />
              <Skeleton style={{ height: '20px', width: '80%' }} />
            </div>
            <AvatarGroup>
              <Avatar src="https://i.pravatar.cc/150?u=1" alt="User 1" />
              <Avatar src="https://i.pravatar.cc/150?u=2" alt="User 2" />
              <Avatar src="https://i.pravatar.cc/150?u=3" alt="User 3" />
            </AvatarGroup>
          </div>
        </div>
      </section>

      <section>
        <Heading level={2}>Layout & Navigation</Heading>
        <div style={{ marginTop: '1rem' }}>
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
