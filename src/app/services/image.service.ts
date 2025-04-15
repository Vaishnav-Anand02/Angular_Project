import { Injectable } from '@angular/core';

export interface Image {
  url: string;  // URL for the image
  title: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private images: Image[] = [
    { url: 'https://images.unsplash.com/photo-1743878206228-5f36b5f5c830?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D', title: 'Forest', category: 'Nature' },
    { url: 'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5c2NyYXBwZXJ8ZW58MHx8MHx8fDA%3D', title: 'Skyscraper', category: 'City' },
    { url: 'https://images.unsplash.com/photo-1575187105891-be9b5d30cecd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D', title: 'Elephant', category: 'Animals' },
    { url: 'https://images.unsplash.com/photo-1519852476561-ec618b0183ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D', title: 'River', category: 'Nature' },
    { url: 'https://images.unsplash.com/photo-1522775559573-2f76d540932b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJpZGdlfGVufDB8fDB8fHww', title: 'Bridge', category: 'City' },
    { url: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpb258ZW58MHx8MHx8fDA%3D', title: 'Lion', category: 'Animals' }
  ];

  // Function to get all images
  getImages() {
    return this.images;
  }

  // Function to get unique categories, with 'All' as the first option
  getCategories() {
    return ['All', ...Array.from(new Set(this.images.map(img => img.category)))];
  }
}
