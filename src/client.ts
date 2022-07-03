import axios from "axios";

const axiosInstance = axios.create({ baseURL: 'https://www.googleapis.com/youtube/v3' })

const YoutubeClient = {
  API_KEY: import.meta.env.VITE_APP_API_KEY,

  buildQueryString(query: {[key: string]: any}): string {
    return Object.keys(query)
      .map(key => query[key] ? `${key}=${query[key]}` : '')
      .filter(key => key)
      .join('&');
  },

  async getVideos(q?: string) {
    const query = {
      key: this.API_KEY,
      q,
      part: 'snippet'
    }
    
    return axiosInstance.get(`/search?${this.buildQueryString(query)}`)
      .then(res => res.data)
  },
  async getPopularVideos() {
    const query = {
      key: this.API_KEY,
      part: 'snippet,contentDetails,statistics',
      chart: 'mostPopular',
      maxResults: 10
    }
    return axiosInstance.get(`/videos?${this.buildQueryString(query)}`)
      .then(res => res.data)
  },
  async getChannelImage(channelId: string) {
    const query = {
      id: channelId,
      key: this.API_KEY,
      part: 'snippet'
    }
    return axiosInstance.get(`/channels?${this.buildQueryString(query)}`)
      .then(res => res.data)
  }
}

export default YoutubeClient
