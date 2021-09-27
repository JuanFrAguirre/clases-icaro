import { Component, OnInit } from '@angular/core';
import { User } from 'src/types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h2>Hola Icaro</h2>',
  styleUrls: ['./app.component.scss'],
  // styles: ['h2 {color: red; margin: 20px 0}'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.usuario1);
    console.log('------------');
    console.log(this.assignOver18());
  }

  title = 'icaro-v1';

  usuario1: User = {
    name: {
      firstName: 'Juan',
      lastName: 'Aguirre',
    },
    age: 40,
    id: 2,
  };

  assignOver18 = () => {
    let usuario2: User;
    usuario2 = {
      ...this.usuario1,
      isOver18: true,
    };
    return usuario2;
  };
}
