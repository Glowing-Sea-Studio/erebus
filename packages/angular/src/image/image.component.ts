import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-image-wrapper" [ngClass]="{'erb-image--fallback': error || !src}">
      <img *ngIf="!error && src" [src]="src" [alt]="alt" class="erb-image" [attr.loading]="lazy ? 'lazy' : 'eager'" (error)="onError()" [width]="width" [height]="height" />
      <ng-container *ngIf="error || !src">{{fallbackText}}</ng-container>
    </div>
  `,
})
export class ImageComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() lazy: boolean = false;
  @Input() fallbackText: string = 'Image not available';
  @Input() width?: string | number;
  @Input() height?: string | number;

  error = false;

  onError() {
    this.error = true;
  }
}
