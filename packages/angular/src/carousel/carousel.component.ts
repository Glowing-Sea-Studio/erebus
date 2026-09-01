import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-carousel" *ngIf="images && images.length > 0">
      <div 
        class="erb-carousel-track" 
        [style.transform]="'translateX(-' + (currentIndex * 100) + '%)'"
      >
        <div *ngFor="let img of images" class="erb-carousel-item">
          <img [src]="img.src" [alt]="img.alt" style="width: 100%; display: block;" />
        </div>
      </div>
      <div class="erb-carousel-controls">
        <button class="erb-carousel-btn" (click)="prev()" aria-label="Previous">&lt;</button>
        <button class="erb-carousel-btn" (click)="next()" aria-label="Next">&gt;</button>
      </div>
    </div>
  `
})
export class CarouselComponent {
  @Input() images: { src: string; alt: string }[] = [];
  
  currentIndex = 0;

  next() {
    if (this.images.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }

  prev() {
    if (this.images.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
}
