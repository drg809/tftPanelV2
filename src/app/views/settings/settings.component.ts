import { SummonersStats } from './../../shared/models/summonersStats';
import { SummonerService } from './../../shared/services/summoners.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user: User;
  leagueEntries: SummonersStats[];
  apexLeagueEntries: SummonersStats[];

  constructor(private summonerService: SummonerService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  getLeaguesEntriesExt() {
    this.summonerService.getLeaguesEntriesExt().subscribe(data => {
      this.leagueEntries = data.sort((a, b) => b.leaguePoints  - a.leaguePoints);
      console.log(this.leagueEntries);
    });
  }

  getApexLeaguesEntriesExt() {
    this.summonerService.getApexLeaguesEntriesExt().subscribe(data => {
      this.apexLeagueEntries = data.sort((a, b) => b.leaguePoints  - a.leaguePoints);
      console.log(this.apexLeagueEntries);
    });
  }

}
