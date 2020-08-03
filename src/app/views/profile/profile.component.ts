import { Component, OnInit } from '@angular/core';
import { SummonerService } from '../../shared/services/summoners.service';
import { Summoner } from '../../shared/models/summoner';

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

  constructor(private summonerService: SummonerService) { }

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

  setMain() {
    this.mainAccount = !this.mainAccount;
    console.log(this.mainAccount);
  }
}
