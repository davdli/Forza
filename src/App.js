import React from 'react';
import { Grid } from '@material-ui/core';
import Main from './components/Main/Main';
import Details from './components/Details/Details';
import Nav from './components/Nav/Nav'
import useStyles from './styles';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <Grid
        className={classes.grid}
        container spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4}>
          <Details title="Current" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Start" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;

