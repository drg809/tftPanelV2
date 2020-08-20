import { Routes } from '@angular/router';

import { StaticsComponent } from './../views/statics/statics.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { UserProfileComponent } from '../views/user-profile/user-profile.component';
import { NotificationsComponent } from '../shared/notifications/notifications.component';
import { HistoricalComponent } from 'app/views/historical/historical.component';
import { HistoricalMatchComponent } from 'app/views/historical/match/historical-match.component';
import { ProfileComponent } from 'app/views/profile/profile.component';
import { SettingsComponent } from 'app/views/settings/settings.component';
import { SearchSumComponent } from 'app/views/search-sum/search-sum.component';

export const LayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'profile',   component: ProfileComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'historical',  component: HistoricalComponent },
    { path: 'historical/:id',  component: HistoricalMatchComponent },
    { path: 'settings',  component: SettingsComponent },
    { path: 'statics/:option',  component: StaticsComponent },
    { path: 'search',  component: SearchSumComponent },
];
