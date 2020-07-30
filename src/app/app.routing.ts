import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layouts/layout.component';
import { LoginComponent } from './components/account/login/login.component';
import { AuthGuard } from './shared/helpers/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      loadChildren: './layouts/layout.module#LayoutModule'
    }]
  },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
