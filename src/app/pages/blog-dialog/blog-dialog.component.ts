import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css']
})
export class BlogDialogComponent implements OnInit {
   

  blogForm : FormGroup;
  /* = new FormGroup({
    title: new FormControl('', Validators.required),
    bloggerName: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });*/
  title_:string = '';
  bloggerName_:string = '';
  content_:string = '';
  
  constructor(
    private fb: FormBuilder,
        private dialogRef: MatDialogRef<BlogDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.title_ = data.title;
    this.content_ = data.content;
    this.bloggerName_ = data.bloggerName;
   }

  ngOnInit(): void {
    this.blogForm = this.fb.group({
       title: [this.title_, []],
       bloggerName: [this.bloggerName_, []],
       content: [this.content_, []]
    });
    
  }
  save() {
    this.dialogRef.close(this.blogForm.value);
}

close() {
    this.dialogRef.close();
}
}
