import { Component, input } from '@angular/core';

export type AvatarSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'erb-avatar',
  standalone: true,
  template: `
    @if (src()) {
      <img [src]="src()" [alt]="name()" class="erb-avatar__image" />
    } @else {
      <span class="erb-avatar__initials">{{ initials }}</span>
    }
  `,
  host: {
    class: 'erb-avatar',
    '[attr.data-size]': 'size()',
    '[attr.role]': '"img"',
    '[attr.aria-label]': 'name()'
  }
})
export class AvatarComponent {
  src = input<string | undefined>();
  name = input<string>('');
  size = input<AvatarSize>('md');

  get initials(): string {
    const n = this.name();
    return n ? n.charAt(0).toUpperCase() : '?';
  }
}

