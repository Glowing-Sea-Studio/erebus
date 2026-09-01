// @ts-nocheck
import { Meta, moduleMetadata } from '@storybook/angular';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';
import { Component } from '@angular/core';

@Component({
  selector: 'erb-toast-demo',
  standalone: true,
  template: `<button (click)="showToast()">Show Toast</button>`
})
class ToastDemoComponent {
  constructor(private toastService: ToastService) {}
  showToast() {
    this.toastService.show('This is a toast from Storybook!');
  }
}

export default {
  title: 'Components/Toast',
  component: ToastComponent,
  decorators: [
    moduleMetadata({
      imports: [ToastComponent, ToastDemoComponent],
      providers: [ToastService]
    }),
  ],
} as Meta;

export const Default = () => ({
  template: `
    <erb-toast-demo></erb-toast-demo>
    <erb-toast-container></erb-toast-container>
  `
});