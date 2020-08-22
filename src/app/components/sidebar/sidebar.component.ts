import { SummonersStats } from './../../shared/models/summonersStats';
import { SummonerStatsService } from './../../shared/services/summonersStats.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/models/user';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    show: boolean;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', show: true },
    { path: '/user-profile', title: 'Perfil usuario',  icon: 'person', class: '', show: false },
    { path: '/profile', title: 'Perfil invocador',  icon: 'person', class: '', show: true },
    { path: '/historical', title: 'Histórico',  icon: 'notifications', class: '', show: true },
    { path: '/historical/:id', title: 'Match Info',  icon: 'notifications', class: '', show: false },
    { path: '/settings', title: 'Preferencias',  icon: 'settings', class: '', show: false },
    { path: '/statics/:option', title: 'Info',  icon: 'info', class: '', show: false },
    { path: '/search', title: 'Buscar invocador',  icon: 'search', class: '', show: true },
    { path: '/compare/:sumId', title: 'Comparar con otro invocador',  icon: 'search', class: '', show: false },
    { path: '/sum-historical/:sumId', title: 'Histórico de otro invocador',  icon: 'search', class: '', show: false },
    { path: '/sum-historical-match/:entrieId/:sumId', title: 'Historico de otro invocador',  icon: 'search', class: '', show: false }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  user: User;
  summonersStats: SummonersStats;

  constructor(private summonerStatsService: SummonerStatsService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.summonerStatsService.getOne(this.user.main).subscribe((x) => {
      this.summonersStats = x;
    })
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
