import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MaterialModule } from '../material/material.module';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SnackbarComponent,
    SpinnerComponent,
    ProgressBarComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent, SpinnerComponent, ProgressBarComponent],
})
export class CoreModule {}
