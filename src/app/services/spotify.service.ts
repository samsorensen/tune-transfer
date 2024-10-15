import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'
import { map } from 'rxjs/operators'
import { Buffer } from 'buffer'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private clientId: string = environment.CLIENT_ID
  private clientSecret: string = environment.CLIENT_SECRET
  private tokenUrl = 'https://accounts.spotify.com/api/token'

  constructor(private http: HttpClient) {
    if (!this.clientId || !this.clientSecret) {
      throw new Error('CLIENT_ID or CLIENT_SECRET not found in environment files');
    }
  }

  async getAccessToken(): Promise<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')
    })
    const body = new HttpParams().set('grant_type', 'client_credentials')
                                 .set('client_id', this.clientId)
                                 .set('client_secret', this.clientSecret)
    try {
      const response$ = this.http.post<{ access_token: string }>(this.tokenUrl, body.toString(), { headers })
                                 .pipe(map(response => response.access_token));
      return firstValueFrom(response$);
    } catch (error) {
      console.error('Error getting access token', error)
      throw new Error('Failed to fetch access token')
    }
  }

}
 