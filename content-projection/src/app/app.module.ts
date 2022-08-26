import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { BaseTableComponent } from './shared/base-table/base-table.component';
import { BaseCardComponent } from './shared/base-card/base-card.component';
import { ConditionalComponent } from './shared/conditional/conditional.component';
import { ConditionalComponentDirective } from './conditional-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    BaseTableComponent,
    BaseCardComponent,
    ConditionalComponent,
    ConditionalComponentDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
