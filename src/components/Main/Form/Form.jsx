import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import useStyles from './styles'

const Form = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select>
            <MenuItem value="Current">Current</MenuItem>
            <MenuItem value="Start">Start</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Exercise</InputLabel>
          <Select>
            <MenuItem value="Bench">Bench</MenuItem>
            <MenuItem value="Squat">Squat</MenuItem>
            <MenuItem value="Deadlift">Deadlift</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Weight" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth>
          Create
      </Button>
    </Grid>
  )
}

export default Form
