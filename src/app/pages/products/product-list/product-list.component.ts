import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  loading = false;
  data = '';

  constructor() {}

  ngOnInit(): void {}

  changeLoading(): void {
    this.loading = !this.loading;
  }

  requestData(): void {
    this.loading = true;
    setTimeout(() => {
      this.data = `Just cloned your repository and served the application.

      The toolbar doesn't show up in primary color because the theme could not be loaded properly.

      You included the theme in the index.html file but Webpack is not able to include this theme in your bundle.

      Just add your theme to the .angular-cli.json file under the styles section.`;
      this.loading = false;
    }, 5000);
  }
}
