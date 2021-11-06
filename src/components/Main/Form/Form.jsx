// dispatch functions passed into context
// accepting those to our component
// calling those action creators to fire up context reducer

import React, { useState, useEffect, useContext } from 'react'; // useEffect => call specific function at certian points in component
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { StrengthProgressContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';
import { currentCategories, startCategories } from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';
import { useSpeechContext } from '@speechly/react-client';

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
  const { segment } = useSpeechContext();

  const createInput = () => {
    if (Number.isNaN(Number(formData.weight)) || !formData.date.includes('-')) return;
    const input = {...formData, weight: Number(formData.weight), id: uuidv4()};
    addInput(input);
    setFormData(initialState);
  };

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === 'add_start') { // reading our intents in speechly config
        setFormData({...formData, category: 'Start'}); // changing category to Start
      } else if (segment.intent.intent === 'add_current') {
        setFormData({...formData, category: 'Current'});
      } else if (segment.isFinal && segment.intent.intent === 'create_input') {
        return createInput();
      } else if (segment.isFinal && segment.intent.intent === 'cancel_input') {
        return setFormData(initialState)
      }

      segment.entities.forEach((entity) => { // reading our entity name in speechly config
        const exercise = `${entity.value.charAt(0)}${entity.value.slice(1).toLowerCase()}`
        switch (entity.type) {
          case 'weight':
            setFormData({...formData, weight: entity.value});
            break;
          case 'exercise':
            setFormData({...formData, exercise: exercise});
            break;
          case 'date':
            setFormData({...formData, date: entity.value});
            break;
          default:
            break;
        }
      })

      if (segment.isFinal && formData.weight && formData.exercise && formData.category && formData.date) { // automatically creates input if all categories are filled
        createInput();
      }
    }
  }, [segment]); // where we look for changes

  const selectedExercises = formData.category === 'Current' ? currentCategories : startCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          {segment && segment.words.map(word => word.value).join(" ")}
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
            {selectedExercises.map((exercise) => <MenuItem key={exercise.type} value={exercise.type}>{exercise.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Weight" fullWidth value={formData.weight} onChange={(event) => setFormData({...formData, weight: event.target.value})} />
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(event) => setFormData({...formData, date: formatDate(event.target.value)})}/>
      </Grid>
      <Button className={classes.button} fullWidth onClick={createInput} style={{color: "#f4f4f4", backgroundColor: 'rgba(38,39,43,0.8)', borderRadius: '6rem', boxShadow: '0 0 2rem rgba(0,0,0,0.4)'}}>Create</Button>
    </Grid>
  );
};

export default Form;
