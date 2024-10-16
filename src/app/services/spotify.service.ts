import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Params } from '@angular/router';
import { lastValueFrom, map, Observable } from 'rxjs';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private clientId: string = environment.CLIENT_ID
  private clientSecret: string = environment.CLIENT_SECRET

  private redirectUri = 'http://localhost:4200/spotify-login'
  private tokenUrl = 'https://accounts.spotify.com/api/token'

  private scope = 'playlist-read-private playlist-read-collaborative'
  state: string | null

  accessToken = ''

  constructor(private http: HttpClient) { 
    if (!this.clientId || !this.clientSecret) {
      throw new Error('Please provide a clientId and clientSecret in enviorment files')
    }
    this.state = localStorage.getItem('spotify_auth_state')
  }

  requestAuthorization() {
    this.state = this.generateRandomString(16)
    localStorage.setItem('spotify_auth_state', this.state);

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

  async handleRedirect(params: Params) {
    const code = params['code']
    const state = params['state']
    if (!code || state !== this.state) {
      console.log('redirect not valid')
      return
    }
    this.accessToken = await this.getAccessToken(code)
  }

  async getAccessToken(code: string): Promise<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')
    })

    const body = new HttpParams().set('grant_type', 'authorization_code')
                                 .set('code', code)
                                 .set('redirect_uri', this.redirectUri)

    try {
      const response$ = this.http.post<{ access_token: string }>(this.tokenUrl, body.toString(), { headers })
                                 .pipe(map(response => response.access_token))
      return lastValueFrom(response$)
    } catch (error) {
      console.error('Error getting access token', error);
      throw new Error('Failed to fetch access token');
    }
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
function firstValueFrom(response$: Observable<unknown>) {
  throw new Error('Function not implemented.');
}

