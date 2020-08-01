import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SummonerService } from '../../../shared/services/summoners.service';
import { SumMatch } from 'app/shared/models/match';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-historical-match',
  templateUrl: './historical-match.component.html',
  styleUrls: ['./historical-match.component.scss']
})
export class HistoricalMatchComponent implements OnInit {
  entrieId: string | null;
  entrie: SumMatch;
  user: User;

  constructor(private route: ActivatedRoute,
              private summonerService: SummonerService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.entrieId = this.route.snapshot.paramMap.get('id');
    this.summonerService.getMatchInfo(this.entrieId).subscribe(data => {
      console.log(data);
      this.entrie = data;
    });
  }
}
