import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface LogoProps {
  src: string;
  alt: string;
}

@Component({
  selector: 'erb-logocloud',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-logocloud" [ngClass]="className()">
      <p *ngIf="title()" class="erb-logocloud-title">{{ title() }}</p>
      <div class="erb-logocloud-logos">
        <img *ngFor="let logo of logos()" [src]="logo.src" [alt]="logo.alt" class="erb-logocloud-logo" />
      </div>
    </div>
  `,
})
export class LogoCloudComponent {
  className = input<string>('');
  title = input<string>();
  logos = input.required<LogoProps[]>();
}
