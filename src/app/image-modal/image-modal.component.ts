import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent {
  @Input() imageUrl!: string;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}