import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { ImageCardComponent } from './components/image-card/image-card.component';

export interface ImageItem {
  _id: string;
  filename: string;
  url: string;
  uploadDate: string;
}

export interface ImageResponse {
  data: ImageItem[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ImageCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Devdiff Test App';
  private appService = inject(AppService);
  images$: Observable<ImageResponse> = this.appService.fetchImages();
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.appService.uploadImage(formData).subscribe({
      next: () => {
        this.images$ = this.appService.fetchImages();
      },
      error: (err) => {
        console.error('Upload failed', err);
      },
      complete: () => {
        this.selectedFile = null;
      },
    });
  }
}
