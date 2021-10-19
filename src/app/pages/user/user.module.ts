import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

// Material Modules
import { MaterialModule } from 'src/app/material/material.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [CommonModule, UserRoutingModule, MaterialModule, MatSnackBarModule],
})
export class UserModule {}
