import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareSumComponent implements OnInit {
  user: User;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  navigateToMatch(entrie: string) {
    this.router.navigate(['/historical/' + entrie]);
  }
}
