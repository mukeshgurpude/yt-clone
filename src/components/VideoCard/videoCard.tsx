import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { ComponentType, useEffect, useState } from "react";
import millify from 'millify'
import YoutubeClient from "../../client";
import { Link } from 'react-router-dom'


interface IVideoCardProps {
  card?: boolean
  image: string
  title: string
  channel: string
  channelId: string
  description?: string
  views: number
  timestamp: string
  videoId: string
}

const VideoCard: ComponentType<IVideoCardProps> = function({ card=false, ...video }) {
  const [channelImage, setChannelImage] = useState('');

  useEffect(() => {
    YoutubeClient.getChannelImage(video.channelId)
      .then(data => {
        setChannelImage(data.items[0].snippet.thumbnails.medium.url)
      })
  }, [])

  if (card) {
    return <Link to={`/video/${video.videoId}`}>
      <Paper elevation={0}>
        <Avatar src={video.image} variant='square' sx={{width: '100%', height: 160}} />
        <Grid container spacing={2} padding={1}>
          <Grid item xs={2}>
            <Avatar src={channelImage} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body2"><strong>{video.title}</strong></Typography>
            <Typography variant='caption'>{video.channel}</Typography><br/>
            <Typography variant='caption'>{millify(video.views)} views • {video.timestamp}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  }
  return <Link to={`/video/${video.videoId}`}>
    <Paper elevation={0}>
      <Grid container spacing={5} padding={2}>
        <Grid item xs={5}>
          <Avatar src={video.image} variant='square' sx={{width: '100%', height: 200}} />
        </Grid>
        <Grid item container xs={6} gap={1} direction='column'>
          <Typography variant="h6"><strong>{video.title}</strong></Typography>
          <Typography variant='caption'>{video.timestamp}</Typography>
          <Grid item container spacing={1} alignItems='center'>
            <Grid item>
              <Avatar src={channelImage} />
            </Grid>
            <Grid item>
              <Typography variant='caption'>{video.channel}</Typography><br/>
            </Grid>
          </Grid>
          <Typography>{video.description?.slice(0, 100)}</Typography>
        </Grid>
      </Grid>
    </Paper>
  </Link>
}

export default VideoCard
