import React from "react";
import style from "./todo.module.css";
import {
  ListItem,
  ListItemText,
  IconButton,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


function Todo(props) {
  const { title, desc } = props.todo;

  const handleClick = (id) => {
    props.onDelete(id);
  };

  return (
    <ListItem
      className={style.todo} // Apply your custom styles
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => handleClick(props.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={<Typography sx={{ color: '#50fa7b', fontWeight: 'bold', fontSize: '18px', fontFamily: 'Poppins, sans-serif' }}> &gt; {title}</Typography>}
        secondary={<Typography sx={{ color: '#ff79c6', fontSize: '16px', fontFamily: 'Roboto, sans-serif' }}>{desc}</Typography>}
      />
    </ListItem>
  );
}

export default Todo;