
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfirmDialogsComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { AngularMaterialModule } from 'app/angular-material.modules';
import { NewSummonerDialogComponent } from './dialogs/new-summoner/new-summoner-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  declarations: [
    ConfirmDialogsComponent,
    NewSummonerDialogComponent
  ],
  exports: [

  ],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
