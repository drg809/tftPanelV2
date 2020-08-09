import { UserProfileService } from './../../shared/services/usersProfile.service';
import { UserProfile } from './../../shared/models/userProfile';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User; userProfile: UserProfile;
  name: string; lastname: string; phone: string; country: string; about: string;

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  onSaveProfile() {
    this.userProfile = {name: this.name, lastname: this.lastname, phone: this.phone, country: this.country, about: this.about};
    this.userProfileService.create(this.userProfile).subscribe((x) => {
      console.log(x);
    });
  };

}
