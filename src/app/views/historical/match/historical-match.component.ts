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
      this.entrie.data.info.participants.sort((a, b) => a.placement  - b.placement);
      this.entrie.data.info.participants.forEach(element => {
        element.units.sort((a, b) => a.rarity - b.rarity);
      });
      this.entrie.data.info.participants.forEach(element => {
        element.units.sort((a, b) => {
          const aRarity = a.rarity;
          const bRarity = b.rarity;
          const aName = a.character_id;
          const bName = b.character_id;
          console.log(aRarity + ' | ' + bRarity);
          if (aRarity == bRarity) {
            return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
          } else {
            return (aRarity < bRarity) ? -1 : 1;
          }
        });
      });
    });
  }
}
