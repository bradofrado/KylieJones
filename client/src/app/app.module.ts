import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { ToDirective } from './shared/to.directive';
import { NotFoundComponent } from './shared/not-found.component';
import { ImageButtonComponent } from './shared/image-button/image-button.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventDetailGuard } from './events/event-detail/event-detail.guard';
import { ArtListComponent } from './art/art-list/art-list.component';
import { PortfolioItemListComponent } from './shared/portfolio-item-list/portfolio-item-list.component';
import { PortfolioItemDetailComponent } from './shared/portfolio-item-detail/portfolio-item-detail.component';
import { ArtDetailComponent } from './art/art-detail/art-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsListComponent,
    ToDirective,
    NotFoundComponent,
    ImageButtonComponent,
    EventDetailComponent,
    ArtListComponent,
    PortfolioItemListComponent,
    PortfolioItemDetailComponent,
    ArtDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'events', component: EventsListComponent },
        { path: 'events/:id', canActivate: [EventDetailGuard], component: EventDetailComponent },
        { path: 'art', component: ArtListComponent },
        { path: 'art/:id', component: ArtDetailComponent },
        { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
