import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-gallery">
      <div 
        *ngFor="let img of images; let i = index" 
        class="erb-gallery-item" 
        (click)="onItemClick(i)"
      >
        <img [src]="img.src" [alt]="img.alt" class="erb-gallery-img" />
      </div>
    </div>
  `
})
export class GalleryComponent {
  @Input() images: { src: string; alt: string }[] = [];
  @Output() imageClick = new EventEmitter<number>();

  onItemClick(index: number) {
    this.imageClick.emit(index);
  }
}
