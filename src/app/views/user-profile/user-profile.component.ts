import { ImageDefault } from './../../shared/helpers/imageDefault';
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
  imageSrc = ImageDefault.getImage();

  constructor(private userProfileService: UserProfileService, public dialog: MatDialog) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.userProfileService.getByUserId(this.user._id).subscribe((x) => {
      this.name = x.name;
      this.lastname = x.lastname;
      this.phone = x.phone;
      this.country = x.country;
      this.about = x.about;
    });
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      Utils.showNotification('top', 'right', 'danger', 'Solo puedes subir una imagen.');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.imageSrc = reader.result;
    // this.obj = {
    //   buttons: {
    //       acceptButtonLabel : 'Guardar',
    //       acceptButtonLabelAccept : 'Guardando'
    //   },
    //   texts: {
    //       title: 'Guardar imagen',
    //       text1: '¿Está seguro que desea ',
    //       textBold: 'guardar ',
    //       text2: 'la nueva imagen de perfil'
    //   },
    //   action: 'danger'
    // };
    // this.dialog.open(ConfirmDialogsComponent, {
    //   data: this.obj,
    // }).afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.userProfile = {userId: this.user._id, name: this.name, lastname: this.lastname, phone: this.phone, country: this.country, about: this.about};
    //     this.userProfileService.create(this.userProfile).subscribe((x) => {
    //       console.log(x);
    //       Utils.showNotification('top', 'right', 'success', 'Perfil guardado correctamente.');
    //     });
    //   } else {
    //     this.imageSrc = ImageDefault.getImage();
    //   }
    // });
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
        this.userProfile = {userId: this.user._id, name: this.name, lastname: this.lastname, phone: this.phone, country: this.country, about: this.about};
        this.userProfileService.create(this.userProfile).subscribe((x) => {
          console.log(x);
          Utils.showNotification('top', 'right', 'success', 'Perfil guardado correctamente.');
        });
      }
    });
  };

}
