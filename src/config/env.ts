function getRequiredEnv(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value
}

export const env = {
  spotify: {
    clientId: getRequiredEnv('SPOTIFY_CLIENT_ID'),
    redirectUri: getRequiredEnv('SPOTIFY_REDIRECT_URI')
  },
  youtube: {
    clientId: getRequiredEnv('YOUTUBE_CLIENT_ID'),
    clientSecret: getRequiredEnv('YOUTUBECLIENT_SECRET'),
  },
  nodeEnv: process.env.NODE_ENV || 'development'
} as const
