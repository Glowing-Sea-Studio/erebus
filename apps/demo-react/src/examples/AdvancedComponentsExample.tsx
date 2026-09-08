import {
  Tabs, TabsList, Tab, TabsPanel,
  Accordion,
  Modal, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalOverlay, Button,
  Carousel,
  Hero, LogoCloud, FeatureGrid, Testimonial, FAQ, CTA,
  Stat, Timeline, EmptyState, Heading, Text
} from '@glowing-sea-studio/erebus-react';
import { useState } from 'react';

export default function AdvancedComponentsExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <section>
        <Heading level={3}>Tabs</Heading>
        <div style={{ marginTop: '1rem' }}>
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
      </section>

      <section>
        <Heading level={3}>Accordion</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
          <Accordion title="Is it accessible?">
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion>
          <Accordion title="Is it styled?">
            Yes. It comes with default styles that matches the other components' aesthetic.
          </Accordion>
        </div>
      </section>

      <section>
        <Heading level={3}>Modal</Heading>
        <div style={{ marginTop: '1rem' }}>
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
      </section>

      <section>
        <Heading level={3}>Carousel</Heading>
        <div style={{ maxWidth: '400px', marginTop: '1rem' }}>
          <Carousel images={[
            { src: 'https://picsum.photos/400/200?random=1', alt: 'Slide 1' },
            { src: 'https://picsum.photos/400/200?random=2', alt: 'Slide 2' },
            { src: 'https://picsum.photos/400/200?random=3', alt: 'Slide 3' }
          ]} />
        </div>
      </section>

      <section>
        <Heading level={3}>Marketing / Display</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '1rem' }}>
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
      </section>

      <section>
        <Heading level={3}>Data Display & States</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '1rem' }}>
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
      </section>
    </div>
  );
}
