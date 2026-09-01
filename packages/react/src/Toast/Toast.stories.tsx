import React from 'react';
import { ToastProvider, useToast } from './Toast';

export default {
  title: 'Components/Toast',
  component: ToastProvider,
};

const ToastDemo = () => {
  const { addToast } = useToast();
  return <button onClick={() => addToast('Hello, this is a toast!')}>Show Toast</button>;
};

export const Default = () => (
  <ToastProvider>
    <ToastDemo />
  </ToastProvider>
);