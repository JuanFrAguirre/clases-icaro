import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  links = ['Home', 'Productos', 'Contacto'];

  activatedMode = true;

  manejarClick = () => (this.activatedMode = !this.activatedMode);
}
