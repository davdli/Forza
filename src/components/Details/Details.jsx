import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';

const Details = ({title}) => {
  const classes = useStyles();
  return (
    <Card className={title === 'Current' ? classes.current : classes.start}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">100 lb</Typography>
        {/* <Doughnut data="Data" /> */}
      </CardContent>
    </Card>
  );
};

export default Details;

