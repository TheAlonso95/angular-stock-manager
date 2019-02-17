import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


// Main Router Module
import { AppRoutingModule } from './app-routing.module';


// NgRx
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';



// Main components 

import { AppComponent } from './app.component';
import { MainComponent } from './core/components/main/main.component';
import { HomeComponent } from './core/components/home/home.component';



// Angular Material

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
  // This is for some components of Angular Material
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
