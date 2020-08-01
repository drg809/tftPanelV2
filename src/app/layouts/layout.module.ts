import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutes } from './layout.routing';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { UserProfileComponent } from '../views/user-profile/user-profile.component';
import { NotificationsComponent } from '../shared/notifications/notifications.component';
import { HistoricalComponent } from 'app/views/historical/historical.component';
import { AngularMaterialModule } from 'app/angular-material.modules';
import { ProfileComponent } from 'app/views/profile/profile.component';
import { HistoricalMatchComponent } from 'app/views/historical/match/historical-match.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    NotificationsComponent,
    HistoricalComponent,
    HistoricalMatchComponent,
    ProfileComponent
  ],
  exports: [
    AngularMaterialModule
  ]
})

export class LayoutModule {}
