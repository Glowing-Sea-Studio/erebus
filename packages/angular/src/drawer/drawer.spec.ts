import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { 
  ErbDrawerOverlayComponent,
  ErbDrawerContentComponent,
  ErbDrawerHeaderComponent,
  ErbDrawerTitleComponent,
  ErbDrawerDescriptionComponent,
  ErbDrawerBodyComponent,
  ErbDrawerFooterComponent
} from './drawer.component';

@Component({
  template: `
    <erb-drawer-overlay></erb-drawer-overlay>
    <erb-drawer-content>
      <erb-drawer-header>
        <erb-drawer-title>Title</erb-drawer-title>
        <erb-drawer-description>Desc</erb-drawer-description>
      </erb-drawer-header>
      <erb-drawer-body>Body</erb-drawer-body>
      <erb-drawer-footer>Footer</erb-drawer-footer>
    </erb-drawer-content>
  `,
  standalone: true,
  imports: [
    ErbDrawerOverlayComponent,
    ErbDrawerContentComponent,
    ErbDrawerHeaderComponent,
    ErbDrawerTitleComponent,
    ErbDrawerDescriptionComponent,
    ErbDrawerBodyComponent,
    ErbDrawerFooterComponent
  ]
})
class TestHostComponent {}

describe('Drawer Components', () => {
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
    expect(compiled.querySelector('erb-drawer-title')?.textContent).toContain('Title');
    expect(compiled.querySelector('erb-drawer-description')?.textContent).toContain('Desc');
    expect(compiled.querySelector('erb-drawer-body')?.textContent).toContain('Body');
    expect(compiled.querySelector('erb-drawer-footer')?.textContent).toContain('Footer');
  });
});
