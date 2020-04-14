import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditFormComponent } from './components/user-edit-form/user-edit-form.component';
import { UsersComponent } from './containers/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forRoot([])],
  declarations: [
    UserListComponent,
    UserEditFormComponent,
    UsersComponent,
    UserComponent
  ]
})
export class FundamentalsOfAngularTestingModule {}
