export interface TokenResponse {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token?: string
  scope: string
}

export interface AuthError {
  error: string
  error_description?: string
}

export interface SpotifyAuthParams {
  response_type: string
  client_id: string
  scope: string
  code_challenge_method: string
  code_challenge: string
  redirect_uri: string
  state: string
}

export interface TokenRequestPayload {
  method: string
  headers: {
    'Content-Type': string
  }
  body: URLSearchParams
}

export type ConnectionStatus = 'idle' | 'connecting' | 'success' | 'error'
