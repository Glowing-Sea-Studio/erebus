import { Injectable, signal } from '@angular/core';

@Injectable()
export class AppShellService {
  readonly isMobileSidebarOpen = signal(false);

  toggleMobileSidebar() {
    this.isMobileSidebarOpen.update((open) => !open);
  }

  closeMobileSidebar() {
    this.isMobileSidebarOpen.set(false);
  }
}
