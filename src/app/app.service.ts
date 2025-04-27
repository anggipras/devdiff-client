import { Injectable } from '@angular/core';
import { ImageResponse } from './app.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  fetchImages() {
    return this.http.get<ImageResponse>(
      `${environment.apiBaseUrl}/images/list`
    );
  }

  uploadImage(formData: FormData) {
    return this.http.post(`${environment.apiBaseUrl}/images/upload`, formData);
  }
}
