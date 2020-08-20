import { FormsModule } from '@angular/forms';

import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'app/angular-material.modules';
import { SearchSumComponent } from './search-sum/search-sum.component';
import { SumHistoricalMatchComponent } from './search-sum/sum-historical/match/historical-match.component';
import { SumHistoricalComponent } from './search-sum/sum-historical/sum-historical.component';
import { TransformNamePipe, ItemCoreChampsPipe } from 'app/shared/helpers/utils';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricalComponent } from './historical/historical.component';
import { HistoricalMatchComponent } from './historical/match/historical-match.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule
  ],
  declarations: [
    HistoricalComponent,
    HistoricalMatchComponent,
    DashboardComponent,
    SearchSumComponent,
    SumHistoricalComponent,
    SumHistoricalMatchComponent,
    TransformNamePipe,
    ItemCoreChampsPipe

  ],
  exports: [
    TransformNamePipe,
    ItemCoreChampsPipe
  ],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewsModule { }
