import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { ListShopperComponent } from './features/list-shopper/list-shopper.component';
import { NewShopperComponent } from './features/new-shopper/new-shopper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListShopperComponent,
    NewShopperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
