import { ToastProvider } from '@glowing-sea-studio/erebus-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DocsLayout } from './docs/DocsLayout';
import { OverviewPage } from './pages/OverviewPage';
import { ButtonPage } from './pages/ButtonPage';
import { FormsPage } from './pages/FormsPage';
import { FeedbackDisplayPage } from './pages/FeedbackDisplayPage';
import { LayoutNavigationPage } from './pages/LayoutNavigationPage';
import { AdvancedComponentsPage } from './pages/AdvancedComponentsPage';

import '@glowing-sea-studio/erebus-tokens/dist/css/variables.css';
import '@glowing-sea-studio/erebus-core/src/components/index.css';

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DocsLayout />}>
            <Route index element={<OverviewPage />} />
            <Route path="button" element={<ButtonPage />} />
            <Route path="forms" element={<FormsPage />} />
            <Route path="feedback-display" element={<FeedbackDisplayPage />} />
            <Route path="layout-navigation" element={<LayoutNavigationPage />} />
            <Route path="advanced-components" element={<AdvancedComponentsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
