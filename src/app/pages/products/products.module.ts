import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, ProductsRoutingModule, MaterialModule, CoreModule],
})
export class ProductsModule {}
