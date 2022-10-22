import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-blog', component: CreateBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
