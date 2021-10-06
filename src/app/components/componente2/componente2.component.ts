import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss'],
})
export class Componente2Component implements OnInit, OnDestroy {
  // usersData: any;
  // arrayDeSubs: Subscription[] = [];
  user: any;

  constructor(public _usersService: UsersService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this._usersService.getUserById(2).subscribe((data) => (this.user = data));
    }, 3500);
  }

  ngOnDestroy(): void {
    // this.arrayDeSubs.forEach((sub) => sub.unsubscribe());
  }
}
