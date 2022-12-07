import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsListComponent } from './events/events-list.component';
import { ToDirective } from './shared/to.directive';
import { NotFoundComponent } from './shared/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsListComponent,
    ToDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'events', component: EventsListComponent },
        { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
