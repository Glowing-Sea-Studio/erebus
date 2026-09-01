import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
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
  toasts$: Observable<ToastMessage[]>;

  constructor(private toastService: ToastService) {
    this.toasts$ = this.toastService.toasts$;
  }

  remove(id: string) {
    this.toastService.remove(id);
  }
}