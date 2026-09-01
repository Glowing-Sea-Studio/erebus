import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-lightbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-lightbox" *ngIf="isOpen" (click)="close.emit()" role="dialog" aria-modal="true">
      <div class="erb-lightbox-content" (click)="$event.stopPropagation()">
        <button class="erb-lightbox-close" (click)="close.emit()" aria-label="Close">
          &times;
        </button>
        <img *ngIf="imageSrc" [src]="imageSrc" [alt]="imageAlt" class="erb-lightbox-img" />
      </div>
    </div>
  `
})
export class LightboxComponent {
  @Input() isOpen = false;
  @Input() imageSrc?: string;
  @Input() imageAlt?: string;
  @Output() close = new EventEmitter<void>();

  @HostListener('window:keydown.escape', ['$event'])
  onEscape() {
    if (this.isOpen) {
      this.close.emit();
    }
  }
}
