import { Component, OnInit } from '@angular/core';
import { SummonerService } from '../../shared/services/summoners.service';
import { Summoner } from '../../shared/models/summoner';
import { Router } from '@angular/router';
import { NotificationsComponent } from 'app/shared/notifications/notifications.component';
import { Utils } from 'app/shared/helpers/utils';

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

  constructor(private summonerService: SummonerService,
              private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.summonerService.getByUserId(this.user._id).subscribe(data => {
      this.summoners = data;
    });
  }

  addNewSummoner() {
    this.summonerName !== undefined ? this.summonerService.create({userId: this.user._id, summonerName: this.summonerName}).subscribe((emitData: any) => { console.log(emitData); }) : console.log('Introduce tu nombre de invocador');
  }

  getMatches(user: any) {
    this.summonerService.getMatches(user).subscribe((emitData: any) => { console.log(emitData); });
  }

  setLastMatch(userId: any) {
    this.summonerService.setLastMatchInfo(userId).subscribe((emitData: any) => { console.log(emitData); });
  }

  deleteSummoner(id: string) {
    this.summonerService.remove(id).subscribe((emitData: any) => { console.log(emitData); });
  }

  setMain(sum: Summoner) {
    sum.main = !sum.main;
    const x: any = {id: sum.id, main: sum.main};
    this.summonerService.setMainSummoner(x).subscribe(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/profile']);
      const t = sum.main ? 'La cuenta ha sido actualizada a la main correctamente, a continuacion aparecera en el dashboard.' : 'La cuenta ha dejado de ser la main correctamente, a continuacion seleccione otra cuenta como main.' ;
      Utils.showNotification('top', 'right', 'success', t);
    });
  }
}
