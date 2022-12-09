import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop'

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
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminProfileComponent } from './auth/admin-profile/admin-profile.component';
import { ToggleButtonGroupComponent } from './shared/toggle-button-group/toggle-button-group.component';
import { ToggleViewDirective } from './shared/toggle-view.directive';
import { EditProfileComponent } from './auth/profile/edit-profile/edit-profile.component';
import { EditPortfolioItemsComponent } from './auth/admin-profile/edit-portfolio-items/edit-portfolio-items.component';
import { EditEventItemsComponent } from './auth/admin-profile/edit-portfolio-items/edit-event-items.component';
import { EditArtItemsComponent } from './auth/admin-profile/edit-portfolio-items/edit-art-items.component';
import { EditPortfolioItemComponent } from './auth/admin-profile/edit-portfolio-items/edit-portfolio-item.component';
import { HeaderComponent } from './header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer.component';
import { LinkIconComponent } from './shared/icon/link-icon.component';
import { IconComponent } from './shared/icon/icon.component';

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
    ArtDetailComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AdminProfileComponent,
    ToggleButtonGroupComponent,
    ToggleViewDirective,
    EditProfileComponent,
    EditPortfolioItemsComponent,
    EditEventItemsComponent,
    EditArtItemsComponent,
    EditPortfolioItemComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    LinkIconComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'events', component: EventsListComponent },
        { path: 'events/:id', canActivate: [EventDetailGuard], component: EventDetailComponent },
        { path: 'art', component: ArtListComponent },
        { path: 'art/:id', component: ArtDetailComponent },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
        { path: 'about', component: AboutComponent },
        { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
