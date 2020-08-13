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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.option = this.route.snapshot.paramMap.get('option');
  }

}
