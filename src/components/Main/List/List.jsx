import React, { useContext } from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import { Delete, FitnessCenterOutlined } from '@material-ui/icons'
import useStyles from './styles'
import { StrengthProgressContext } from '../../../context/context'

const List = () => {
  const classes = useStyles()
  const { removeInput } = useContext(StrengthProgressContext)
  const inputs = [
    {id: 1, category: "Start", exercise: 'Bench', weight: 135, date: "Tues Nov 2"},
    {id: 2, category: "Start", exercise: 'Squat', weight: 225, date: "Wed Nov 3"},
    {id: 3, category: "Current", exercise: 'Bench', weight: 185, date: "Thurs Nov 4"}
  ];
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
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}

export default List
