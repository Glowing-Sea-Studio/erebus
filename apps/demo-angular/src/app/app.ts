import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErbButtonDirective } from '@glowing-sea-studio/erebus-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ErbButtonDirective],
  template: `
    <div style="padding: 2rem;">
      <h1>Erebus Angular Demo</h1>
      <button erb-button variant="solid" color="primary">Click me</button>
    </div>
  `,
})
export class App {
  title = 'demo-angular';
}
