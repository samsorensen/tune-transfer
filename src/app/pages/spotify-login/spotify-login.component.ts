import { Component } from '@angular/core';
import { TitleHeaderComponent } from "../../components/title-header/title-header.component";
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(url => {
      if (url.some(segment => segment.path === 'spotify-login')) {
        this.route.queryParams.subscribe(params => {
          this.spotifyService.handleRedirect(params);
        });
      }
    });
  }

  signInButton() {
    this.spotifyService.requestAuthorization()
  }

}
