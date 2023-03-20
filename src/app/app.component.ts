import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface MediaFile {
  id: string;
  fileName: string;
  mimeType: string;
  fileSize: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'video-streaming-ui';
  mediaFiles: MediaFile[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<MediaFile[]>('http://localhost:8080/storage/findAll').subscribe((mediaFiles: MediaFile[]) => {
      this.mediaFiles = mediaFiles;
    });
  }
}
