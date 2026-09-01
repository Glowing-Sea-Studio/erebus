import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { 
  ErbAlertDialogOverlayComponent,
  ErbAlertDialogContentComponent,
  ErbAlertDialogHeaderComponent,
  ErbAlertDialogTitleComponent,
  ErbAlertDialogDescriptionComponent,
  ErbAlertDialogBodyComponent,
  ErbAlertDialogFooterComponent
} from './alert-dialog.component';

@Component({
  template: `
    <erb-alert-dialog-overlay data-testid="overlay"></erb-alert-dialog-overlay>
    <erb-alert-dialog-content>
      <erb-alert-dialog-header>
        <erb-alert-dialog-title>Title</erb-alert-dialog-title>
        <erb-alert-dialog-description>Desc</erb-alert-dialog-description>
      </erb-alert-dialog-header>
      <erb-alert-dialog-body>Body</erb-alert-dialog-body>
      <erb-alert-dialog-footer>Footer</erb-alert-dialog-footer>
    </erb-alert-dialog-content>
  `,
  standalone: true,
  imports: [
    ErbAlertDialogOverlayComponent,
    ErbAlertDialogContentComponent,
    ErbAlertDialogHeaderComponent,
    ErbAlertDialogTitleComponent,
    ErbAlertDialogDescriptionComponent,
    ErbAlertDialogBodyComponent,
    ErbAlertDialogFooterComponent
  ]
})
class TestHostComponent {}

describe('AlertDialog Components', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should render correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('erb-alert-dialog-title')?.textContent).toContain('Title');
    expect(compiled.querySelector('erb-alert-dialog-description')?.textContent).toContain('Desc');
    expect(compiled.querySelector('erb-alert-dialog-body')?.textContent).toContain('Body');
    expect(compiled.querySelector('erb-alert-dialog-footer')?.textContent).toContain('Footer');
  });
});
