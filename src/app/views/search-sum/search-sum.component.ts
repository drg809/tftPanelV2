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

  constructor(private summonerService: SummonerService,
              private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  navigateToMatch(entrie: string) {
    this.router.navigate(['/historical/' + entrie]);
  }
}
