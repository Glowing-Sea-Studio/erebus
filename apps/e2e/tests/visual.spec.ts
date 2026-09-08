import { test, expect } from '@playwright/test';

// React Routes
const REACT_ROUTES = [
  '/',
  '/button',
  '/forms',
  '/feedback-display',
  '/layout-navigation',
  '/advanced-components'
];

// Angular Routes
const ANGULAR_ROUTES = [
  '/',
  '/button',
  '/forms',
  '/feedback-display',
  '/layout-navigation',
  '/advanced-components'
];

test.describe('React Demo Visual Tests', () => {
  for (const route of REACT_ROUTES) {
    test(`React - ${route || '/'}`, async ({ page }) => {
      await page.goto(`http://localhost:4200${route}`);
      // Wait for page to be stable
      await page.waitForLoadState('networkidle');
      // Take screenshot
      const safeRouteName = route === '/' ? 'index' : route.replace(/\//g, '-');
      await page.screenshot({ path: `tests/snapshots/react-${safeRouteName}.png`, fullPage: true });
    });
  }
});

test.describe('Angular Demo Visual Tests', () => {
  for (const route of ANGULAR_ROUTES) {
    test(`Angular - ${route || '/'}`, async ({ page }) => {
      await page.goto(`http://localhost:4201${route}`);
      // Wait for page to be stable
      await page.waitForLoadState('networkidle');
      // Take screenshot
      const safeRouteName = route === '/' ? 'index' : route.replace(/\//g, '-');
      await page.screenshot({ path: `tests/snapshots/angular-${safeRouteName}.png`, fullPage: true });
    });
  }
});
