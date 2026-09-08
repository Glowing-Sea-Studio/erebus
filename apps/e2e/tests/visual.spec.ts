import { test, expect } from '@playwright/test';

const REACT_ROUTES = ['/', '/button', '/forms', '/feedback-display', '/layout-navigation', '/advanced-components'];
const ANGULAR_ROUTES = ['/', '/button', '/forms', '/feedback-display', '/layout-navigation', '/advanced-components'];

test.describe('React Demo Visual Tests', () => {
  for (const route of REACT_ROUTES) {
    test(`React - ${route || '/'}`, async ({ page }, testInfo) => {
      await page.goto(`http://localhost:4200${route}`);
      await page.waitForLoadState('networkidle');
      const safeRouteName = route === '/' ? 'index' : route.replace(/\//g, '-');
      await page.screenshot({ path: `e2e-screenshots/react-${safeRouteName}-${testInfo.project.name}.png`, fullPage: true });
    });
  }
});

test.describe('Angular Demo Visual Tests', () => {
  for (const route of ANGULAR_ROUTES) {
    test(`Angular - ${route || '/'}`, async ({ page }, testInfo) => {
      await page.goto(`http://localhost:4201${route}`);
      await page.waitForLoadState('networkidle');
      const safeRouteName = route === '/' ? 'index' : route.replace(/\//g, '-');
      await page.screenshot({ path: `e2e-screenshots/angular-${safeRouteName}-${testInfo.project.name}.png`, fullPage: true });
    });
  }
});
