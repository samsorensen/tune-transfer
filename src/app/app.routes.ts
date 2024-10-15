import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SpotifyLoginComponent } from './pages/spotify-login/spotify-login.component';

export const routes: Routes = [
    { path: 'home-page', component: HomeComponent },
    { path: 'spotify-login', component: SpotifyLoginComponent }
];
