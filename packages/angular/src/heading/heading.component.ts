import { Component, input } from '@angular/core';

@Component({
  selector: 'erb-heading',
  standalone: true,
  template: `
    @switch (level()) {
      @case (1) { <h1 class="erb-heading erb-heading--1"><ng-content></ng-content></h1> }
      @case (2) { <h2 class="erb-heading erb-heading--2"><ng-content></ng-content></h2> }
      @case (3) { <h3 class="erb-heading erb-heading--3"><ng-content></ng-content></h3> }
      @case (4) { <h4 class="erb-heading erb-heading--4"><ng-content></ng-content></h4> }
      @case (5) { <h5 class="erb-heading erb-heading--5"><ng-content></ng-content></h5> }
      @case (6) { <h6 class="erb-heading erb-heading--6"><ng-content></ng-content></h6> }
    }
  `,
  host: {
    display: 'contents'
  }
})
export class HeadingComponent {
  level = input<1 | 2 | 3 | 4 | 5 | 6>(2);
}
