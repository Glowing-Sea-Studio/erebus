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
        <div className="docs-header-title">
          <img src="/logo.svg" alt="Logo" className="docs-header-logo" />
          <span className="desktop-only">Erebus React Docs</span>
          <span className="mobile-only">Erebus React</span>
        </div>
        <nav className="desktop-only" style={{ display: 'flex' }}>
          <a href="#" style={{ color: 'var(--erb-color-fg-muted)', textDecoration: 'none', marginRight: '1rem' }}>Docs</a>
          <a href="#" style={{ color: 'var(--erb-color-fg-muted)', textDecoration: 'none' }}>GitHub</a>
        </nav>
      </Header>

      <Sidebar style={{ padding: '1rem', gap: '0.25rem' }}>
        <div className="mobile-only" style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--erb-color-border-default)' }}>
          <a href="#" style={{ textDecoration: 'none', display: 'block', marginBottom: '0.5rem', padding: '0.5rem', color: 'var(--erb-color-fg-muted)' }}>Docs</a>
          <a href="#" style={{ textDecoration: 'none', display: 'block', padding: '0.5rem', color: 'var(--erb-color-fg-muted)' }}>GitHub</a>
        </div>
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

      <style>{`
        .docs-main { padding: 1rem; max-width: 1000px; margin: 0 auto; width: 100%; box-sizing: border-box; }
        .docs-header-title { flex: 1; display: flex; align-items: center; gap: 0.75rem; font-weight: bold; font-size: 1.125rem; color: var(--erb-color-neutral-fg); }
        .docs-header-logo { width: 32px; height: 32px; }
        .mobile-only { display: block; }
        .desktop-only { display: none !important; }
        @media (min-width: 769px) {
          .docs-main { padding: 3rem; }
          .docs-header-title { font-size: 1.5rem; }
          .mobile-only { display: none !important; }
          .desktop-only { display: block !important; }
          nav.desktop-only { display: flex !important; }
        }
      `}</style>
      <main className="docs-main">
        <Outlet />
      </main>

      <Footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--erb-color-fg-muted)' }}>
        <p>© {new Date().getFullYear()} Glowing Sea Studio. All rights reserved.</p>
      </Footer>
    </AppShell>
  );
}
