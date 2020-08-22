import { SummonersStats } from './../../shared/models/summonersStats';
import { Component, OnInit } from '@angular/core';
import { SummonerService } from '../../shared/services/summoners.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-search-sum',
  templateUrl: './search-sum.component.html',
  styleUrls: ['./search-sum.component.scss']
})
export class SearchSumComponent implements OnInit {
  user: User;
  sum: SummonersStats[];
  searchQuery: string;

  constructor(private summonerService: SummonerService,
              private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  searchSum() {
    this.summonerService.getStatsByName({name: this.searchQuery}).subscribe(x => {
      this.sum = x;
      console.log(this.sum);
    });
  }

  showGraphics(name: string) {
    this.summonerService.getStatsByName({name: name}).subscribe(x => {
      this.sum = x;
      console.log(this.sum);
    });
  }

  compare(name: string) {
    this.summonerService.getStatsByName({name: name}).subscribe(x => {
      this.sum = x;
      console.log(this.sum);
    });
  }

  navigateToMatch(sumId: string) {
    this.router.navigate(['/sum-historical/' + sumId]);
  }
}
