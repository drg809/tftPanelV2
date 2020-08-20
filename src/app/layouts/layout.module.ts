import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutes } from './layout.routing';
import { UserProfileComponent } from '../views/user-profile/user-profile.component';
import { NotificationsComponent } from '../shared/notifications/notifications.component';
import { AngularMaterialModule } from 'app/angular-material.modules';
import { ProfileComponent } from 'app/views/profile/profile.component';
import { SettingsComponent } from 'app/views/settings/settings.component';
import { DatabaseComponent } from 'app/views/database/databse.component';
import { StaticsComponent } from 'app/views/statics/statics.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  declarations: [
    UserProfileComponent,
    NotificationsComponent,
    ProfileComponent,
    SettingsComponent,
    DatabaseComponent,
    StaticsComponent
  ],
  exports: [
    AngularMaterialModule
  ]
})

export class LayoutModule {}
