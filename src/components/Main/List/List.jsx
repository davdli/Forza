import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, FitnessCenterOutlined } from '@material-ui/icons';
import useStyles from './styles';
import { StrengthProgressContext } from '../../../context/context';

const List = () => {
  const classes = useStyles();
  const { removeInput, inputs } = useContext(StrengthProgressContext);
  return (
    <MUIList dense={false} className={classes.list}>
      {inputs.map((input) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={input.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={input.category === "Current" ? classes.avatarCurrent : classes.avatarStart}>
                <FitnessCenterOutlined />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={input.exercise} secondary={`${input.weight} lb - ${input.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => removeInput(input.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
