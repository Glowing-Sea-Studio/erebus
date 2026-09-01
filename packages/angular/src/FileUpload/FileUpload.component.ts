import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-file-upload',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="erb-file-upload"
      [ngClass]="className"
      [attr.data-drag-active]="isDragActive"
      (dragenter)="onDragEnter($event)"
      (dragleave)="onDragLeave($event)"
      (dragover)="onDragOver($event)"
      (drop)="onDrop($event)"
      (click)="onClick()"
    >
      <input
        type="file"
        #fileInput
        class="erb-file-upload-input"
        (change)="onFileChange($event)"
        [multiple]="multiple"
        [accept]="accept"
      />
      <ng-content></ng-content>
      <span *ngIf="!hasContent">Drag & Drop files here or click to browse</span>
    </div>
  `,
})
export class FileUploadComponent {
  @Input() className: string = '';
  @Input() multiple: boolean = false;
  @Input() accept: string = '';
  @Output() fileSelect = new EventEmitter<FileList | null>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('content', { static: true }) content?: ElementRef;

  isDragActive: boolean = false;
  
  get hasContent(): boolean {
    return false; // For simplcity, assume no content for basic angular transclusion check unless more complex DOM checking
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragActive = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragActive = false;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragActive = false;

    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.fileSelect.emit(event.dataTransfer.files);
    }
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.fileSelect.emit(input.files);
  }

  onClick() {
    this.fileInput.nativeElement.click();
  }
}
