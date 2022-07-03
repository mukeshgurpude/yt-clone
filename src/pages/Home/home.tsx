//@ts-nocheck
import { Alert, Grid } from '@mui/material'
import { useQuery } from 'react-query'
import YoutubeClient from '../../client'
import SkeletonVideo from '../../components/VideoCard/skeletonCard'
import { DateTime } from 'luxon'
import VideoCard from '../../components/VideoCard/videoCard'
import './home.scss'

export default function Home() {
  const { data, isError, isLoading, error } = useQuery('recommended_videos', (ctx) => {
    return YoutubeClient.getPopularVideos()
  })

  if (isError) {
    return <Alert severity='error'>{error?.message ?? 'Something went wrong'}</Alert>
  }
  if (isLoading) {
    return <Grid container spacing={2}>
    {
      Array.from({ length: 12 }, (_, i) => (
        <Grid item key={i} xs={12} sm={4} md={3} sx={{minWidth: 320}}>
          <SkeletonVideo card key={i}/>
        </Grid>
      ))
    }
  </Grid>
  }
  return <Grid container spacing={2}>{
    data.items.map((video, i) => {
      const videoId = video.id;
      const snippet = video.snippet;
      const channelId = snippet.channelId;

      const title = snippet.title;
      const image = snippet.thumbnails.medium.url;
      const views = video.statistics.viewCount;
      const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channel = snippet.channelTitle;
      
      return <Grid item key={i} xs={12} sm={4} md={3} sx={{minWidth: 300 }}>
        <VideoCard
          card
          videoId={videoId}
          title={title}
          image={image}
          views={views}
          timestamp={timestamp}
          channel={channel}
          channelId={channelId}
        />
      </Grid>
    })
  }</Grid>
}
