import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import useInputs from '../../useInputs';

const Details = ({title}) => {
  const classes = useStyles();
  const { total, chartData } = useInputs(title)

  return (
    <Card className={title === 'Current' ? classes.current : classes.start} style={{borderRadius: '2rem', boxShadow: '0.5rem 0.5rem 1rem #18191b'}}>
      <CardHeader title={title} style={{textAlign: 'center'}}/>
      <CardContent>
        <Typography variant="h5" style={{textAlign: 'center'}}>{total} lb</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;

