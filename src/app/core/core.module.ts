import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [HeaderComponent, SnackbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
