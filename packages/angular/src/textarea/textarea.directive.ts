import { Directive } from '@angular/core';

@Directive({
  selector: 'textarea[erbTextarea]',
  standalone: true,
  host: {
    class: 'erb-textarea',
  }
})
export class ErbTextareaDirective {
}
