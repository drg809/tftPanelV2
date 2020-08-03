import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-databse',
  templateUrl: './databse.component.html',
  styleUrls: ['./databse.component.scss']
})
export class DatabaseComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

}
