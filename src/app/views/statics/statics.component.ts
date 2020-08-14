import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.scss']
})
export class StaticsComponent implements OnInit {
  user: User;
  option: any;
  rrss: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.option = this.route.snapshot.paramMap.get('option');
    this.rrss = [
      { name: 'Twitch', url: 'https://www.twitch.tv/mrmugui', res: '../../../assets/icons/twitch-brands.svg' },
      { name: 'Twitter', url: 'https://twitter.com/mrmugui', res: '../../../assets/icons/twitter-square-brands.svg' },
      { name: 'YouTube', url: 'https://www.youtube.com/channel/UCRklIYzE97Vds_cMUbSvDdg', res: '../../../assets/icons/youtube-square-brands.svg' }
    ];
  }

}
