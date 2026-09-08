import { AppShell, Header, Sidebar, Footer } from '@glowing-sea-studio/erebus-react';
import { Outlet, NavLink } from 'react-router-dom';

const COMPONENT_ROUTES = [
  { path: '/button', name: 'Button' },
  { path: '/forms', name: 'Forms' },
  { path: '/feedback-display', name: 'Feedback & Display' },
  { path: '/layout-navigation', name: 'Layout & Navigation' },
  { path: '/advanced-components', name: 'Advanced Components' },
];

export function DocsLayout() {
  return (
    <AppShell>
      <Header showHamburgerMenu={true}>
        <div style={{ flex: 1, fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--erb-color-neutral-fg)' }}>Erebus React Docs</div>
        <nav>
          <a href="#" style={{ color: 'var(--erb-color-fg-muted)', textDecoration: 'none', marginRight: '1rem' }}>Docs</a>
          <a href="#" style={{ color: 'var(--erb-color-fg-muted)', textDecoration: 'none' }}>GitHub</a>
        </nav>
      </Header>

      <Sidebar style={{ padding: '1rem', gap: '0.25rem' }}>
        <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--erb-color-fg-muted)', fontWeight: 600, margin: '0.5rem 0', padding: '0 0.5rem' }}>Components</h3>
        <NavLink 
          to="/" 
          end
          style={({isActive}) => ({ color: isActive ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)', textDecoration: 'none', display: 'block', marginBottom: '0.25rem', padding: '0.5rem', borderRadius: '6px', backgroundColor: isActive ? 'var(--erb-color-bg-subtle)' : 'transparent', fontWeight: isActive ? '600' : '400' })}
        >
          Overview
        </NavLink>
        {COMPONENT_ROUTES.map(route => (
          <NavLink 
            key={route.path}
            to={route.path} 
            style={({isActive}) => ({ color: isActive ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)', textDecoration: 'none', display: 'block', marginBottom: '0.5rem', fontWeight: isActive ? 'bold' : 'normal' })}
          >
            {route.name}
          </NavLink>
        ))}
      </Sidebar>

      <main style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <Outlet />
      </main>

      <Footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--erb-color-fg-muted)' }}>
        <p>© {new Date().getFullYear()} Glowing Sea Studio. All rights reserved.</p>
      </Footer>
    </AppShell>
  );
}
