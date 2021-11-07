import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import { StrengthProgressContext } from '../../context/context';

const InfoCard = () => {
  return (
    <div style={{textAlign: 'center', padding: '0 10%'}}>
      HEY FORZA: <br />
      ADD TO CURRENT, 225 FOR BENCH
    </div>
  )
}

const Main = () => {
  const classes = useStyles();
  const { totalGain } = useContext(StrengthProgressContext);
  return (
    <Card classname={classes.root} style={{backgroundColor: '#f4f4f4', borderRadius: '2rem', boxShadow: '0.5rem 0.5rem 1rem #18191b'}}>
      <CardHeader title="Strength Progress" style={{textAlign: 'center'}}/>
      <CardContent>
        <Typography align="center" variant="h5">Total Gain: {totalGain} lb</Typography>
        <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop: '20px'}} >
          {InfoCard()}
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
