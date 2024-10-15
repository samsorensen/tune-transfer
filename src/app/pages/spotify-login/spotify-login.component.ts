import { Component } from '@angular/core';
import { TitleHeaderComponent } from "../../components/title-header/title-header.component";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [TitleHeaderComponent],
  templateUrl: './spotify-login.component.html',
  styleUrl: './spotify-login.component.css'
})
export class SpotifyLoginComponent {

  title = 'Spotify Login';
  description = 'Login to Spotify to access your playlists and songs';

  constructor(private spotifyService: SpotifyService) {}

  printAccessToken() {
    this.spotifyService.getAccessToken()
      .then(token => console.log('Access Token:', token))
      .catch(error => console.error('Error getting access token:', error));
  }

  onNextClicked() {}

}
