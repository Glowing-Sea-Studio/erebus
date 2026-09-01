import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastMessage } from './toast.service';

@Component({
  selector: 'erb-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-toast-container">
      <div class="erb-toast" *ngFor="let toast of toasts$ | async">
        <div class="erb-toast-message">{{ toast.message }}</div>
        <button class="erb-toast-close" (click)="remove(toast.id)">&times;</button>
      </div>
    </div>
  `
})
export class ToastComponent {
  toasts$;

  constructor(private toastService: ToastService) { this.toasts$; }

  remove(id: string) {
    this.toastService.remove(id);
  }
}