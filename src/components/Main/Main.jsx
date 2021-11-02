import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import useStyles from './styles'
import Form from './Form/Form'

const Main = () => {
  const classes = useStyles()
  return (
    <Card classname={classes.root}>
      <CardHeader title="Strength Progress" />
      <CardContent>
        <Typography align="center" variant="h5">Total Gain: 100</Typography>
        <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop: '20px'}} >
          {/* InfoCard... */}
          Ask Forza: Add 225 for Bench on Monday to Current...
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* List */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main
