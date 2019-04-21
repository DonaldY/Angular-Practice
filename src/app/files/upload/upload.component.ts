import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  token = '123';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getToken() {
    this.http.get<any>('http://localhost:8080/token').subscribe(res => {
      this.token = res['data'];
    });
  }

  uploadImage(file: File) {
    const formData = new FormData();

    formData.append('file', file);

    this.http.post('http://localhost:8080/auth/upload', formData).subscribe(res => {
      console.log(res);
    });
  }


}
