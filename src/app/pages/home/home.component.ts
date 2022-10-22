import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { LoadingService } from 'src/app/services/loading.service';
import { Blog, BlogService } from '../../../blog.service';
import { BlogDialogComponent } from '../blog-dialog/blog-dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading$ = this.loader.loading$;
  searchTerm = '';
  allBlogs : Blog[] = [];
  public blogs: Blog[] = [];
  constructor(private blogservice:BlogService,
              private loader: LoadingService,
              private dialog: MatDialog) { }

  ngOnInit(): void {

    this.blogservice.getBlogs().then((res: Blog[]) => {
      console.log(res);
      this.blogs = res;
      this.allBlogs = this.blogs;
    }).catch(err => {
      console.log(err);
    });

  }

  //open blog dialog
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(BlogDialogComponent, dialogConfig);
}
  search(value: string): void {
    this.blogs = this.allBlogs.filter((val) =>
      val.title.toLowerCase().includes(value)
    );
  }

}
