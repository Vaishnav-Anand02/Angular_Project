import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from '../services/image.service';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent {
  @Input() image!: Image;
  @Output() imageClick = new EventEmitter<string>();

  onImageClick() {
    this.imageClick.emit(this.image.url);
  }
}