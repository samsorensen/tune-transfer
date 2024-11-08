import { Component } from '@angular/core'
import { TitleHeaderComponent } from "../../components/title-header/title-header.component"
import { SpotifyService } from '../../services/spotify.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [TitleHeaderComponent],
  templateUrl: './spotify-login.component.html',
  styleUrl: './spotify-login.component.css'
})
export class SpotifyLoginComponent {
  title = 'Spotify Login'
  description = 'Login to Spotify to access your playlists and songs'

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      const code = params['code']
      const state = params['state']
      const storedState = localStorage.getItem('spotify_auth_state')

      if (state === undefined || state !== storedState) {
        console.error('State mismatch')
        return
      }
      localStorage.removeItem('spotify_auth_state')

      if (code !== undefined) {
        await this.spotifyService.reqAccessToken(code)
      }

      // this.spotifyService.tokenReceived.subscribe(token => {
      //   this.token = token
      //   console.log('Token in Component:', token)
      // })
    })
  }

  signInButton() {
    this.spotifyService.requestAuthorization()
  }
}
