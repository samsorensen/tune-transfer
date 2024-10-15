import { Component } from '@angular/core';
import { TitleHeaderComponent } from "../../components/title-header/title-header.component";

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

  onNextClicked() {}

}
