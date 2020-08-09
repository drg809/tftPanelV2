import { UserProfileService } from './../../shared/services/usersProfile.service';
import { UserProfile } from './../../shared/models/userProfile';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/models/user';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogsComponent } from 'app/shared/dialogs/confirm-dialog/confirm-dialog.component';
import { Utils } from 'app/shared/helpers/utils';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User; userProfile: UserProfile;
  name: string; lastname: string; phone: string; country: string; about: string; obj: any;

  constructor(private userProfileService: UserProfileService, public dialog: MatDialog) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  onSaveProfile() {
    this.obj = {
      buttons: {
          acceptButtonLabel : 'Guardar',
          acceptButtonLabelAccept : 'Guardando'
      },
      texts: {
          title: 'Guardar perfil',
          text1: '¿Está seguro que desea ',
          textBold: 'guardar ',
          text2: 'el perfil'
      },
      action: 'danger'
    };
    this.dialog.open(ConfirmDialogsComponent, {
      data: this.obj,
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.userProfile = {name: this.name, lastname: this.lastname, phone: this.phone, country: this.country, about: this.about};
        this.userProfileService.create(this.userProfile).subscribe((x) => {
          console.log(x);
          Utils.showNotification('top', 'right', 'success', 'Perfil guardado correctamente.');
        });
      }
    });
  };

}
