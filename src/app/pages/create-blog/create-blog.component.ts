import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogService } from '../../../blog.service';
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  // blog creation form
  blogCreateForm = new FormGroup({
    title: new FormControl('', Validators.required),
    bloggerName: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',

  };


  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
   

  }
  //loader
  //add snack bar
  onSubmit() {
    if (this.blogCreateForm.valid) {
      console.log("Form Submitted!");
      this.blogService.postBlog(this.blogCreateForm.value).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err);
      });
      
      this.blogCreateForm.reset();
    }
  }
  

}




