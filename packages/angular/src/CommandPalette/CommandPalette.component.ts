import { Component } from '@angular/core';

@Component({
  selector: 'erb-command-palette',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-command-palette'
  }
})
export class CommandPaletteComponent {}

