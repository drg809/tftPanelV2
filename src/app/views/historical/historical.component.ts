import { Component, OnInit } from '@angular/core';
import { SummonerService } from '../../shared/services/summoners.service';
import { SumMatch } from '../../shared/models/match';
import { User } from '../../shared/models/user';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss']
})
export class HistoricalComponent implements OnInit {
  matchs: SumMatch[];
  user: User;
  pageEvent: PageEvent;
  pageIndex: number;
  pageSize: number;
  length: number;

  constructor(private summonerService: SummonerService,
              private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.getServerData(null);
  }

  public getServerData(event?: PageEvent) {
    console.log(event);
    const pageI = event ? event.pageIndex : 0;
    const params = {userId: this.user._id, page: pageI + 1}
    this.summonerService.getMatchesHistoric(params).subscribe(data => {
      this.matchs = data.data;
      this.matchs.sort((a, b) => b.data?.info.game_datetime  - a.data?.info.game_datetime);
      this.length = data.numResult;
      this.pageIndex = data.pageIndex - 1;
      this.pageSize = data.pageSize;
    });
    return event;
  }

  navigateToMatch(entrie: string) {
    console.log(entrie);
    this.router.navigate(['/historical/' + entrie]);
  }
}
