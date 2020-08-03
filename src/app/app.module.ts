import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { LayoutComponent } from './layouts/layout.component';
import { JwtInterceptor } from './shared/helpers/jwt';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.modules';
import { AccountModule } from './components/account/account.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    AccountModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularMaterialModule,
    BrowserModule
  ],
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
