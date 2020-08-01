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
        let r: string;
        switch (element.last_round) {
          case 1:
            r = '1-1';
            break;
          case 2:
            r = '1-2';
            break;
          case 3:
            r = '1-3';
            break;
          case 4:
            r = '1-4';
            break;
          case 5:
            r = '2-1';
            break;
          case 6:
            r = '2-2';
            break;
          case 7:
            r = '2-3';
            break;
          case 8:
            r = '2-4';
            break;
          case 9:
            r = '2-5';
            break;
          case 10:
            r = '2-6';
            break;
          case 11:
            r = '2-7';
            break;
          case 12:
            r = '3-1';
            break;
          case 13:
            r = '3-2';
            break;
          case 14:
            r = '3-3';
            break;
          case 15:
            r = '3-4';
            break;
          case 16:
            r = '3-5';
            break;
          case 17:
            r = '3-6';
            break;
          case 18:
            r = '3-7';
            break;
          case 19:
            r = '4-1';
            break;
          case 20:
            r = '4-2';
            break;
          case 21:
            r = '4-3';
            break;
          case 22:
            r = '4-4';
            break;
          case 23:
            r = '4-5';
            break;
          case 24:
            r = '4-6';
            break;
          case 25:
            r = '4-7';
            break;
          case 26:
            r = '5-1';
            break;
          case 27:
            r = '5-2';
            break;
          case 28:
            r = '5-3';
            break;
          case 29:
            r = '5-4';
            break;
          case 30:
            r = '5-5';
            break;
          case 31:
            r = '5-6';
            break;
          case 32:
            r = '5-7';
            break;
          case 33:
            r = '6-1';
            break;
          case 34:
            r = '6-2';
            break;
          case 35:
            r = '6-3';
            break;
          case 36:
            r = '6-4';
            break;
          case 37:
            r = '6-5';
            break;
          case 38:
            r = '6-6';
            break;
          case 39:
            r = '6-7';
            break;
          case 40:
            r = '7-1';
            break;
          case 41:
            r = '7-2';
            break;
          case 42:
            r = '7-3';
            break;
          case 43:
            r = '7-4';
            break;
          case 44:
            r = '7-5';
            break;
          case 45:
            r = '7-6';
            break;
          case 46:
            r = '7-7';
            break;
          default:
            r = '1-1';
        }
        element.r = r;
        console.log(r);
        element.units.sort((a, b) => {
          const aRarity = a.rarity;
          const bRarity = b.rarity;
          const aName = a.character_id;
          const bName = b.character_id;
          if (aRarity == bRarity) {
            return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
          } else {
            return (aRarity < bRarity) ? -1 : 1;
          }
        });
        element.traits.sort((a, b) => {
          const aStyle = a.style;
          const bStyle = b.style;
          const aName = a.name;
          const bName = b.name;
          if (aStyle == bStyle) {
            return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
          } else {
            return (aStyle > bStyle) ? -1 : 1;
          }
        });
      });
    });
  }
}
