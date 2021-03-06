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
  matchsPaginated: SumMatch[];
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
    this.summonerService.getMatchesHistoric(this.user.main).subscribe(data => {
      this.matchs = data;
    });
  }

  public getServerData(event?: PageEvent) {
    const pageI = event ? event.pageIndex : 0;
    const params = {sumId: this.user.main, page: pageI + 1}
    this.summonerService.getMatchesHistoricPaginate(params).subscribe(data => {
      this.matchsPaginated = data.data;
      // this.matchs.sort((a, b) => b.data?.info.game_datetime  - a.data?.info.game_datetime);
      this.length = data.numResult;
      this.pageIndex = data.pageIndex - 1;
      this.pageSize = data.pageSize;
    });
    return event;
  }

  navigateToMatch(entrie: string) {
    this.router.navigate(['/historical/' + entrie]);
  }

  reloadData() {
    this.getServerData();
  }
}
