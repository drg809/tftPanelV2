import { UserProfile } from './../../../shared/models/userProfile';
import { MatchNotes } from './../../../shared/models/matchNotes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SummonerService } from '../../../shared/services/summoners.service';
import { SumMatch } from 'app/shared/models/match';
import { User } from 'app/shared/models/user';
import { Utils } from 'app/shared/helpers/utils';
import { MatchNotesServices } from 'app/shared/services/matchNotes.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogsComponent } from 'app/shared/dialogs/confirm-dialog/confirm-dialog.component';
import { UserProfileService } from 'app/shared/services/usersProfile.service';

@Component({
  selector: 'app-historical-match',
  templateUrl: './historical-match.component.html',
  styleUrls: ['./historical-match.component.scss']
})
export class HistoricalMatchComponent implements OnInit {
  entrieId: string | null;
  entrie: SumMatch;
  user: User;
  dif: string;
  text: string;
  obj: any;
  matchNote: MatchNotes;
  matchNotes: MatchNotes[];
  matchNotesh: MatchNotes[];
  userProfile: UserProfile;
  visible = true;


  constructor(private route: ActivatedRoute,
              private summonerService: SummonerService,
              private userProfileService: UserProfileService,
              private matchNotesServices: MatchNotesServices,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.entrieId = this.route.snapshot.paramMap.get('id');
    this.summonerService.getMatchInfo(this.entrieId).subscribe(data => {
      this.entrie = data;
      this.entrie.data.info.participants.sort((a, b) => a.placement  - b.placement);
      this.entrie.data.info.participants.forEach(element => {
        element.units.sort((a, b) => a.rarity - b.rarity);
      });
      this.dif = Utils.getTimeDif(this.entrie.data.info.game_datetime);
      this.entrie.data.info.participants.forEach(element => {
        element.r = Utils.getRound(element.last_round);
        const m: number = Math.trunc(element.time_eliminated / 60);
        const s: number = Math.trunc(element.time_eliminated % 60);
        element.d = m + ':' + s;
        element.units.sort((a, b) => {
          const aRarity = a.rarity;
          const bRarity = b.rarity;
          const aName = a.character_id;
          const bName = b.character_id;
          if (aRarity === bRarity) {
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
          if (aStyle === bStyle) {
            return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
          } else {
            return (aStyle > bStyle) ? -1 : 1;
          }
        });
      });
    });
    this.setMatchNotes(this.entrieId, this.user._id);
    this.userProfileService.getByUserId(this.user._id).subscribe((x) => {
      this.userProfile = x;
    });
  }

  analitics() {

  }

  setMatchNotes(entrieId: string, userId: string) {
    this.matchNotesServices.getAll(entrieId).subscribe((x) => {
      this.matchNotes = x;
    });
    this.matchNotesServices.getMyNotes(entrieId, userId).subscribe((x) => {
      this.matchNotesh = x;
    });
  }

  onSaveNote() {
    this.obj = {
      buttons: {
          acceptButtonLabel : 'Guardar',
          acceptButtonLabelAccept : 'Guardando'
      },
      texts: {
          title: 'Guardar nota',
          text1: '¿Está seguro que desea ',
          textBold: 'guardar ',
          text2: 'la nota'
      },
      action: 'danger'
    };
    this.dialog.open(ConfirmDialogsComponent, {
      data: this.obj,
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.matchNote = {userId: this.user._id, entrieId: this.entrieId, text: this.text, visible: this.visible};
        console.log(this.matchNote);
        this.matchNotesServices.create(this.matchNote).subscribe((x) => {
          this.text = '';
          Utils.showNotification('top', 'right', 'success', 'Nota guardada correctamente.');
          this.setMatchNotes(this.entrieId, this.user._id);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        });
      }
    });
  }
}
