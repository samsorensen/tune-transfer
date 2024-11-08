import { Injectable, EventEmitter } from '@angular/core'
import { environment } from '../../environments/environment.development'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Buffer } from 'buffer'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private clientId: string = environment.CLIENT_ID
  private clientSecret: string = environment.CLIENT_SECRET

  private redirectUri = 'http://localhost:4200/spotify-login'
  private tokenUrl = 'https://accounts.spotify.com/api/token'

  private scope = 'playlist-read-private playlist-read-collaborative'
  state: null | string = null
  accessToken: null | string = null

  constructor(private http: HttpClient) { 
    if (!this.clientId || !this.clientSecret) {
      throw new Error('Please provide a clientId and clientSecret in enviorment files')
    }
  }

  requestAuthorization() {
    this.state = this.generateRandomString(16)
    localStorage.setItem('spotify_auth_state', this.state)

    const urlParams = new URLSearchParams({
      response_type: 'code',
      client_id: this.clientId,
      scope: this.scope,
      redirect_uri: this.redirectUri,
      state: this.state
    }).toString()

    const authUrl = `https://accounts.spotify.com/authorize?${urlParams}`
    window.location.href = authUrl
  }

  async reqAccessToken(code: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')
    })
    const body = new HttpParams().set('grant_type', 'authorization_code')
                                 .set('code', code)
                                 .set('redirect_uri', this.redirectUri)

    this.http.post<{ access_token: string }>(this.tokenUrl, body.toString(), { headers: headers }).subscribe({
      next: response => {
        this.accessToken = response.access_token
      }
    })
  }
 
  private generateRandomString(length: number): string {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }
}
