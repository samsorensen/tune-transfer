import { Component } from '@angular/core'
import { TitleHeaderComponent } from "../../components/title-header/title-header.component"
import { SpotifyService } from '../../services/spotify.service'
import { ActivatedRoute } from '@angular/router'
import { PlaylistItem } from '../../models/spotify/api-response.interface'

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

  playlists: PlaylistItem[] = []

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      const code = params['code']
      const state = params['state']
      const storedState = localStorage.getItem('spotify_auth_state')

      if (state === undefined || state !== storedState) {
        return
      }
      localStorage.removeItem('spotify_auth_state')
      if (code !== undefined) {
        await this.spotifyService.reqAccessToken(code)
      }

      this.playlists = await this.spotifyService.getPlaylists()
    })
  }

  signInButton() {
    this.spotifyService.requestAuthorization()
  }
}
