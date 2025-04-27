import { Component, Input } from '@angular/core';
import { ImageItem } from '../../app.component';

@Component({
  selector: 'app-image-card',
  imports: [],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css',
})
export class ImageCardComponent {
  @Input() image!: ImageItem;
  @Input() index!: number;
}
