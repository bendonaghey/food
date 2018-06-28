import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from '../../posts/posts.component';
import { ViewPostComponent } from '../../view-post/view-post.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: ViewPostComponent },
  { path: '**', redirectTo: 'listings', pathMatch: 'full' },
  { path: 'user', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
