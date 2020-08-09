import { Component, OnInit } from '@angular/core';
import { SummonerService } from '../../shared/services/summoners.service';
import { Summoner } from '../../shared/models/summoner';
import { Router } from '@angular/router';
import { NotificationsComponent } from 'app/shared/notifications/notifications.component';
import { Utils } from 'app/shared/helpers/utils';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogsComponent } from 'app/shared/dialogs/confirm-dialog/confirm-dialog.component';
import { NewSummonerDialogComponent } from 'app/shared/dialogs/new-summoner/new-summoner-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  summoners: any;
  newSummoner: Summoner;
  summonerName: string;
  user: any;
  mainAccount: boolean;
  obj: any;

  constructor(private summonerService: SummonerService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.summonerService.getByUserId(this.user._id).subscribe(data => {
      this.summoners = data;
    });
  }

  addNewSummoner() {
    this.obj = {
      buttons: {
          acceptButtonLabel : 'Crear invocador',
          acceptButtonLabelAccept : 'Creando'
      },
      texts: {
          title: 'Introducir un nuevo invocador',
          text: 'Va a crear un nuevo invocador para ser trackeado.'
      }
    };
    this.dialog.open(NewSummonerDialogComponent, {
      data: this.obj,
    }).afterClosed().subscribe((result) => {
      if (result.res) {
        console.log(result);
        const sum: Summoner = {userId: this.user._id, summonerName: result.name};
        this.summonerService.create(sum).subscribe((emitData: any) => { console.log(emitData); });
        Utils.showNotification('top', 'right', 'success', 'Nuevo invocador creado con nombre ' + result.name);      }
    });
  }

  getMatches(sum: Summoner) {
    this.summonerService.getMatches(sum).subscribe((emitData: any) => { console.log(emitData); });
  }

  setLastMatch(sum: Summoner) {
    this.obj = {
      buttons: {
          acceptButtonLabel : 'Actualizar',
          acceptButtonLabelAccept : 'Actualizando'
      },
      texts: {
          title: 'Actualizar invocador',
          text1: '¿Está seguro que desea ',
          textBold: 'actualizar ',
          text2: 'el invocador '
      },
      action: 'danger',
      object: { name: sum.summonerName }
    };
    this.dialog.open(ConfirmDialogsComponent, {
      data: this.obj,
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.summonerService.setLastMatchInfo(sum).subscribe(() => { Utils.showNotification('success', 'La lista de partidas ha sido actualizada.'); });
      }
    });
  }

  deleteSummoner(id: string, name: string) {
    this.obj = {
      buttons: {
          acceptButtonLabel : 'Borrar',
          acceptButtonLabelAccept : 'Borrando'
      },
      texts: {
          title: 'Borrar invocador',
          text1: '¿Está seguro que desea ',
          textBold: 'borrar ',
          text2: 'el invocador '
      },
      action: 'danger',
      object: { name: name }
    };
    this.dialog.open(ConfirmDialogsComponent, {
      data: this.obj,
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.summonerService.remove(id).subscribe(() => { Utils.showNotification('success', 'El invocador ha sido eliminado.'); });
      }
    });
  }

  setMain(sum: Summoner) {
    sum.main = !sum.main;
    const x: any = {id: sum.id, userId: sum.userId, main: sum.main};
    this.summonerService.setMainSummoner(x).subscribe(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/profile']);
      const t = !sum.main ? 'La cuenta ha sido actualizada a la main correctamente, a continuacion aparecera en el dashboard.' : 'La cuenta ha dejado de ser la main correctamente, a continuacion seleccione otra cuenta como main para mostrar en la dashboard.' ;
      Utils.showNotification('top', 'right', 'success', t);
    });
  }
}
