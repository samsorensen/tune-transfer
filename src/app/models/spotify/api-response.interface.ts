interface SpotifyImage {
    url: string
    height: number
    width: number
  }
  
  interface ExternalUrls {
    spotify: string
  }
  
  interface Followers {
    href: string | null
    total: number
  }
  
  interface Owner {
    external_urls: ExternalUrls
    followers: Followers
    href: string
    id: string
    type: string
    uri: string
    display_name: string
  }
  
  interface Tracks {
    href: string
    total: number
  }
  
  export interface PlaylistItem {
    collaborative: boolean
    description: string
    external_urls: ExternalUrls
    href: string
    id: string
    images: SpotifyImage[]
    name: string
    owner: Owner
    public: boolean
    snapshot_id: string
    tracks: Tracks
    type: string
    uri: string
  }
  
  export interface PlaylistResponse {
    href: string
    limit: number
    next: string | null
    offset: number
    previous: string | null
    total: number
    items: PlaylistItem[]
  }
  