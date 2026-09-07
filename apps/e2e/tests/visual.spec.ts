import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  
  test('React Demo - Kitchen Sink full page', async ({ page }) => {
    // Navigate to React Demo
    await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });
    
    // Check if the page is loaded
    await expect(page.locator('h1').filter({ hasText: 'Erebus React Demo' })).toBeVisible();

    // Take a full page screenshot
    await expect(page).toHaveScreenshot('react-kitchen-sink-full.png', { fullPage: true, maxDiffPixelRatio: 0.05 });
  });

  test('Angular Demo - Kitchen Sink full page', async ({ page }) => {
    // Navigate to Angular Demo
    await page.goto('http://localhost:4201', { waitUntil: 'networkidle' });
    
    // Check if the page is loaded
    await expect(page.locator('h1').filter({ hasText: 'Erebus Angular Demo' })).toBeVisible();

    // Take a full page screenshot
    await expect(page).toHaveScreenshot('angular-kitchen-sink-full.png', { fullPage: true, maxDiffPixelRatio: 0.05 });
  });

  // Mobile layout tests
  test('React Demo - Mobile Sidebar Open', async ({ page }) => {
    // Set viewport to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });
    
    // Click hamburger button
    await page.getByRole('button').filter({ hasText: '' }).first().click(); // Needs proper selector if hamburger has no aria-label
    // wait for animation
    await page.waitForTimeout(500);
    
    await expect(page).toHaveScreenshot('react-mobile-sidebar.png', { maxDiffPixelRatio: 0.05 });
  });

  test('Angular Demo - Mobile Sidebar Open', async ({ page }) => {
    // Set viewport to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:4201', { waitUntil: 'networkidle' });
    
    // Click hamburger button
    await page.getByRole('button').filter({ hasText: '' }).first().click();
    // wait for animation
    await page.waitForTimeout(500);
    
    await expect(page).toHaveScreenshot('angular-mobile-sidebar.png', { maxDiffPixelRatio: 0.05 });
  });

});
