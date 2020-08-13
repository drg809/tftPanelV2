import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/shared/services/authentication.service';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    layer: any;
    mobile_menu_visible: any = 0;
    user: User;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(location: Location,
                private element: ElementRef,
                private router: Router,
                private authService: AuthenticationService) {
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit() {
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this.router.events.subscribe((event) => {
        this.sidebarClose();
        this.layer = document.getElementsByClassName('close-layer')[0];
          if (this.layer) {
            this.layer.remove();
            this.mobile_menu_visible = 0;
          }
     });
     this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function() {
            toggleButton.classList.add('toggled');
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        const $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];

        if (this.mobile_menu_visible === 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if (this.layer) {
                this.layer.remove();
            }
            setTimeout(function() {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function() {
                $toggle.classList.add('toggled');
            }, 430);

            this.layer = document.createElement('div');
            this.layer.setAttribute('class', 'close-layer');


            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild(this.layer);
            } else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild(this.layer);
            }

            setTimeout(function() {
              this.layer.classList.add('visible');
            }, 100);

            this.layer.onclick = function() { // asign a function
              body.classList.remove('nav-open');
              this.mobile_menu_visible = 0;
              this.layer.classList.remove('visible');
              setTimeout(function() {
                this.layer.remove();
                  $toggle.classList.remove('toggled');
              }, 400);
            }.bind(this);

            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;

        }
    };

    getTitle() {
      let title = this.location.prepareExternalUrl(this.location.path());
      if (title.charAt(0) === '#') {
          title = title.slice( 1 );
      }
      for (let item = 0; item < this.listTitles.length; item++) {
          if (this.listTitles[item].path === title) {
              return this.listTitles[item].title;
          } else if (!this.listTitles[item].show && this.listTitles[item].title) {
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }

    logout() {
      this.authService.logout();
    }
}
