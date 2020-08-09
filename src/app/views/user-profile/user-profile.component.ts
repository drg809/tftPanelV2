import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  name: string; lastname: string; phone: string; country: string; about: string;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  onSaveProfile() {
    console.log(1);
  }

}
