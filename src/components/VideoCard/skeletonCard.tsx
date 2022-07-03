import { Grid, Paper, Skeleton } from "@mui/material";


type TCardProps = { card?: boolean }
export default function SkeletonVideo({card=false}: TCardProps) {

  if (card) {
    return <Paper>
      <Skeleton variant="rectangular" height={150} />
      <Grid container spacing={2} padding={1}>
        <Grid item>
          <Skeleton variant="circular" width={40} height={40} />
        </Grid>
        <Grid item>
          <Skeleton variant="text" width={150} />
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={100} />
        </Grid>
      </Grid>
    </Paper>
  }
  return <Paper>
    <Grid container spacing={5}>
      <Grid item xs={3}>
        <Skeleton variant="rectangular" height={200} />
      </Grid>
      <Grid item container xs={6} direction='column' spacing={2}>
        <br/>
        <Skeleton variant="text" width={200} height={40} />
        <Skeleton variant="text" width={100} height={10} />
        <Grid item container spacing={3}>
          <Grid item>
            <Skeleton variant="circular" width={30} height={30} />
          </Grid>
          <Grid item>
            <Skeleton variant="text" width={80} height={30} />
          </Grid>
        </Grid>
        <Skeleton variant="text" width={400} height={60} />
      </Grid>
    </Grid>
  </Paper>
}
