import { Routes } from '@angular/router';
import { DocsLayoutComponent } from './docs/docs-layout.component';
import { OverviewPageComponent } from './pages/overview-page.component';
import { ButtonPageComponent } from './pages/button-page.component';
import { FormsPageComponent } from './pages/forms-page.component';
import { FeedbackDisplayPageComponent } from './pages/feedback-display-page.component';
import { LayoutNavigationPageComponent } from './pages/layout-navigation-page.component';
import { AdvancedComponentsPageComponent } from './pages/advanced-components-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DocsLayoutComponent,
    children: [
      { path: '', component: OverviewPageComponent },
      { path: 'button', component: ButtonPageComponent },
      { path: 'forms', component: FormsPageComponent },
      { path: 'feedback-display', component: FeedbackDisplayPageComponent },
      { path: 'layout-navigation', component: LayoutNavigationPageComponent },
      { path: 'advanced-components', component: AdvancedComponentsPageComponent },
    ]
  }
];
