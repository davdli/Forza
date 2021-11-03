// dispatch functions passed into context
// accepting those to our component
// calling those action creators to fire up context reducer

import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { StrengthProgressContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';
import { currentCategories, startCategories } from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';

const initialState = {
  category: '',
  exercise: '',
  weight: '',
  date: formatDate(new Date()),
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addInput } = useContext(StrengthProgressContext);

  const createInput = () => {
    const input = {...formData, weight: Number(formData.weight), id: uuidv4()};
    addInput(input);
    setFormData(initialState);
  };

  const selectedExercises = formData.category === 'Current' ? currentCategories : startCategories;

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
          <Select value={formData.category} onChange={(event) => setFormData({...formData, category: event.target.value})}>
            <MenuItem value="Current">Current</MenuItem>
            <MenuItem value="Start">Start</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Exercise</InputLabel>
          <Select value={formData.exercise} onChange={(event) => setFormData({...formData, exercise: event.target.value})}>
            {selectedExercises.map((category) => <MenuItem key={category.exercise} value={category.exercise}>{category.exercise}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Weight" fullWidth value={formData.weight} onChange={(event) => setFormData({...formData, weight: event.target.value})} />
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(event) => setFormData({...formData, date: formatDate(event.target.value)})}/>
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createInput}>Create
      </Button>
    </Grid>
  );
};

export default Form;
