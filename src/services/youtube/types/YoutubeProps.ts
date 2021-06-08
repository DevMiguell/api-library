type VideosProps = {
  id: {
    videoId: string
  }
  
  etag: string

  snippet: {
    publishedAt: string
    title: string
    description: string
    thumbnails: {
      default: {
        url: string
        width: number
        height: number
      }
      medium: {
        url: string
        width: number
        height: number
      }
      high: {
        url: string
        width: number
        height: number
      }
    }
  }
}

export interface ArrayVideosProps {
  youtubeData: VideosProps[]
}