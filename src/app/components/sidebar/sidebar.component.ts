import { Component, OnInit } from '@angular/core';

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
    { path: '/user-profile', title: 'User Profile',  icon: 'person', class: '', show: false },
    { path: '/profile', title: 'Summoner Profiles',  icon: 'person', class: '', show: true },
    { path: '/historical', title: 'Historical',  icon: 'notifications', class: '', show: true },
    { path: '/historical/:id', title: 'Match Info',  icon: 'notifications', class: '', show: false },
    { path: '/settings', title: 'Settings',  icon: 'settings', class: '', show: false },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
