import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { BaseTableComponent } from './shared/base-table/base-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    BaseTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
