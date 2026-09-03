import { useState } from 'react';
import { 
  Button, Card, CardHeader, CardTitle, CardBody, CardFooter,
  Badge, Tag, Avatar, AvatarGroup, Spinner, Skeleton, 
  Input, Textarea, Checkbox, Switch, Radio,
  Heading, Text, Alert, AlertTitle, AlertDescription,
  Accordion,
  Tabs, TabsList, Tab, TabsPanel,
  Breadcrumb,
  Progress, Slider, Modal, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalOverlay,
  FeatureGrid, Testimonial, CTA, Carousel,
  Hero, FAQ, LogoCloud, EmptyState, Stat, Timeline, Code
} from '@glowing-sea-studio/erebus-react';

export function KitchenSink() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Text>Slider</Text>
            <div style={{ flex: 1 }}><Slider defaultValue={[50]} max={100} step={1} /></div>
          </div>
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

          <div>
            <Text>Progress</Text>
            <Progress value={60} />
          </div>
        </div>
      </section>

      <section>
        <Heading level={2}>Layout & Navigation</Heading>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Breadcrumb>
            <a href="#" style={{ color: 'var(--erb-color-primary-base)', textDecoration: 'none' }}>Home</a>
            <a href="#" style={{ color: 'var(--erb-color-primary-base)', textDecoration: 'none' }}>Components</a>
            <span style={{ color: 'var(--erb-color-fg-muted)' }} aria-current="page">Breadcrumb</span>
          </Breadcrumb>

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

      <section>
        <Heading level={2}>Advanced Components</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1rem' }}>

          <div>
            <Heading level={3} style={{ marginBottom: '1rem' }}>Tabs</Heading>
            <Tabs defaultValue="tab1">
              <TabsList>
                <Tab value="tab1">Tab 1</Tab>
                <Tab value="tab2">Tab 2</Tab>
                <Tab value="tab3">Tab 3</Tab>
              </TabsList>
              <div style={{ marginTop: '1rem' }}>
                <TabsPanel value="tab1">Content for Tab 1</TabsPanel>
                <TabsPanel value="tab2">Content for Tab 2</TabsPanel>
                <TabsPanel value="tab3">Content for Tab 3</TabsPanel>
              </div>
            </Tabs>
          </div>

          <div>
            <Heading level={3} style={{ marginBottom: '1rem' }}>Accordion</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Accordion title="Is it accessible?">
                Yes. It adheres to the WAI-ARIA design pattern.
              </Accordion>
              <Accordion title="Is it styled?">
                Yes. It comes with default styles that matches the other components' aesthetic.
              </Accordion>
            </div>
          </div>

          <div>
            <Heading level={3} style={{ marginBottom: '1rem' }}>Modal</Heading>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <ModalTitle>Modal Title</ModalTitle>
                </ModalHeader>
                <ModalBody>
                  <Text>This is the modal body content. You can put any component here.</Text>
                </ModalBody>
                <ModalFooter>
                  <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                  <Button variant="solid" color="primary" onClick={() => setIsModalOpen(false)}>Confirm</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>

          <div>
            <Heading level={3} style={{ marginBottom: '1rem' }}>Carousel</Heading>
            <div style={{ maxWidth: '400px' }}>
              <Carousel images={[
                { src: 'https://picsum.photos/400/200?random=1', alt: 'Slide 1' },
                { src: 'https://picsum.photos/400/200?random=2', alt: 'Slide 2' },
                { src: 'https://picsum.photos/400/200?random=3', alt: 'Slide 3' }
              ]} />
            </div>
          </div>

          <div>
            <Heading level={3} style={{ marginBottom: '1rem' }}>Marketing / Display</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <Heading level={4} style={{ marginBottom: '0.5rem' }}>Hero</Heading>
                <Hero
                  title="Build faster with Erebus"
                  subtitle="The ultimate design system for your next big project."
                  primaryAction={{ label: 'Get Started', onClick: () => {} }}
                  secondaryAction={{ label: 'Documentation', onClick: () => {} }}
                />
              </div>

              <div>
                <Heading level={4} style={{ marginBottom: '0.5rem' }}>LogoCloud</Heading>
                <LogoCloud
                  title="Trusted by innovative teams worldwide"
                  logos={[
                    { src: 'https://placehold.co/120x40?text=Logo+1', alt: 'Company 1' },
                    { src: 'https://placehold.co/120x40?text=Logo+2', alt: 'Company 2' },
                    { src: 'https://placehold.co/120x40?text=Logo+3', alt: 'Company 3' },
                    { src: 'https://placehold.co/120x40?text=Logo+4', alt: 'Company 4' }
                  ]}
                />
              </div>

              <div>
                <Heading level={4} style={{ marginBottom: '0.5rem' }}>FeatureGrid</Heading>
                <FeatureGrid
                  features={[
                    { title: 'Feature 1', description: 'Description for feature 1' },
                    { title: 'Feature 2', description: 'Description for feature 2' },
                    { title: 'Feature 3', description: 'Description for feature 3' }
                  ]}
                />
              </div>

              <div>
                <Heading level={4} style={{ marginBottom: '0.5rem' }}>Testimonial</Heading>
                <Testimonial
                  quote="This design system is amazing! It makes building applications so much faster."
                  author="John Doe"
                  role="Frontend Developer"
                  avatarUrl="https://i.pravatar.cc/150?u=4"
                />
              </div>

              <div>
                <Heading level={4} style={{ marginBottom: '0.5rem' }}>FAQ</Heading>
                <FAQ
                  items={[
                    { question: 'What is Erebus?', answer: 'Erebus is a comprehensive design system.' },
                    { question: 'Is it free?', answer: 'Yes, it is open-source and free to use.' }
                  ]}
                />
              </div>

              <div>
                <Heading level={4} style={{ marginBottom: '0.5rem' }}>CTA</Heading>
                <CTA
                  title="Ready to dive in?"
                  description="Start building your application today with Erebus."
                  primaryAction={{ label: 'Get Started', onClick: () => {} }}
                  secondaryAction={{ label: 'Learn More', onClick: () => {} }}
                />
              </div>
            </div>
          </div>

          <div>
            <Heading level={3} style={{ marginBottom: '1rem' }}>Data Display & States</Heading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <Heading level={4} style={{ marginBottom: '0.5rem' }}>Stat</Heading>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <Stat label="Total Users" value="10,234" helpText="+12% from last month" />
                  <Stat label="Revenue" value="$43,000" helpText="+5% from last month" />
                </div>
              </div>

              <div>
                <Heading level={4} style={{ marginBottom: '0.5rem' }}>Timeline</Heading>
                <Timeline
                  items={[
                    { title: 'Project Started', description: 'Initial commit and setup.', date: 'Jan 1, 2026' },
                    { title: 'Alpha Release', description: 'First version released for internal testing.', date: 'Mar 15, 2026' },
                    { title: 'Public Beta', description: 'Opened to the public.', date: 'Jun 1, 2026' }
                  ]}
                />
              </div>

              <div>
                <Heading level={4} style={{ marginBottom: '0.5rem' }}>EmptyState</Heading>
                <EmptyState
                  title="No projects found"
                  description="Get started by creating a new project."
                  action={{ label: 'Create Project', onClick: () => {} }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
