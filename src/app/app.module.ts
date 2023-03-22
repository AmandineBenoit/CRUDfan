import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FanListComponent } from './Components/fan-list/fan-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    FormsModule,
    FormBuilder
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
