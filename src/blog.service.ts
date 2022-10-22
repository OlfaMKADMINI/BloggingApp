import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private configUrl = 'https://localhost:5001/api/';

   private  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {

  }

  postBlog(data: any) {

    return new Promise((resolve, reject) => {
      // our logic goes here ..
      this.http.post(this.configUrl + 'Blogs', data).subscribe(res => resolve(res),
        err => reject(err));
      ;
    })

  }
  getBlogs() {

    return new Promise<Blog[]>((resolve, reject) => {
      // our logic goes here ..
      this.http.get<Blog[]>(this.configUrl + 'Blogs').subscribe((res: Blog[]) => resolve(res),
        err => reject(err));
      ;
    })

  }
}
export interface Blog {
  id: number;
  title: string;
  bloggerName: string;
}
