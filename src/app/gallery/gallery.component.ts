import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService, Image } from '../services/image.service';
import { ImageCardComponent } from '../image-card/image-card.component';
import { ImageModalComponent } from '../image-modal/image-modal.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ImageCardComponent, ImageModalComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  allImages: Image[] = [];
  filteredImages: Image[] = [];
  categories: string[] = [];
  selectedCategory = 'All';
  selectedImageUrl: string | null = null;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.allImages = this.imageService.getImages();
    this.categories = this.imageService.getCategories();
    this.filterImages();
  }

  filterImages() {
    this.filteredImages = this.selectedCategory === 'All'
      ? this.allImages
      : this.allImages.filter(img => img.category === this.selectedCategory);
  }

  onImageClick(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
  }

  closeModal() {
    this.selectedImageUrl = null;
  }
}