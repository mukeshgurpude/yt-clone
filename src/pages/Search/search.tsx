//@ts-nocheck
import { useNavigate ,useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { Grid } from '@mui/material'
import YoutubeClient from '../../client';
import SkeletonVideo from '../../components/VideoCard/skeletonCard';
import VideoCard from '../../components/VideoCard/videoCard';
import { DateTime } from 'luxon'


export default function Search() {
  const navigate = useNavigate();
  const { query } = useParams();

  if (query === '') {
    navigate('/');
  }

  const { data, isLoading, isError, error } = useQuery(['search', query], () => {
    return YoutubeClient.getVideos(query);
  })

  if (isLoading) {
    return <Grid container direction='column' spacing={2}>
      {
        Array.from({ length: 10 }).map((_, i) => {
          return <Grid item key={i} xs={12}>
            <SkeletonVideo />
          </Grid>
        })
      }
    </Grid>
  }
  return <Grid container direction='column' gap={8}>
    {
      data?.items?.map((item, i) => {
        const video = {}
        video.videoId = item.id.videoId
        video.title = item.snippet.title
        video.description = item.snippet.description
        video.channel = item.snippet.channelTitle
        video.publishedAt = item.snippet.publishedAt
        video.image = item.snippet.thumbnails.medium.url
        video.channelId = item.snippet.channelId
        video.timestamp = DateTime.fromISO(item.snippet.publishedAt).toRelative();
        return <Grid item key={i} xs={12}>
          <VideoCard {...video} />
        </Grid>
      })
    }
  </Grid>
}
