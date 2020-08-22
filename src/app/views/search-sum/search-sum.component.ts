import { SummonersStats } from './../../shared/models/summonersStats';
import { Component, OnInit } from '@angular/core';
import { SummonerService } from '../../shared/services/summoners.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'app/shared/models/user';
import { Summoner } from 'app/shared/models/summoner';

@Component({
  selector: 'app-search-sum',
  templateUrl: './search-sum.component.html',
  styleUrls: ['./search-sum.component.scss']
})
export class SearchSumComponent implements OnInit {
  user: User;
  sumStats: SummonersStats[];
  sum: Summoner;
  searchQuery: string;

  constructor(private summonerService: SummonerService,
              private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  searchSum() {
    this.summonerService.getStatsByName({name: this.searchQuery}).subscribe(x => {
      this.sumStats = x;
    });
  }

  showGraphics(name: string) {
    this.summonerService.getByName({name: name}).subscribe(x => {
      this.router.navigate(['/sum-historical/' + x._id]);
    });
  }

  compare(name: string) {
    this.summonerService.getByName({name: name}).subscribe(x => {
      this.router.navigate(['/compare/' + x._id]);
    });
  }
}
