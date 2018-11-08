import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [{
  path: 'user/:id',
  component: UserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ],
  declarations: []

})
export class UserRoutingModule { }
