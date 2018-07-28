import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from '../../posts/posts.component';
import { ViewPostComponent } from '../../view-post/view-post.component';
import { AddPostComponent } from '../../add-post/add-post.component';
import { HomeComponent } from '../../home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/add', component: AddPostComponent },
  { path: 'posts/:id', component: ViewPostComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
