import "./App.css";
import React, { useState } from "react";
import { green, pink } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NoteIcon from "@mui/icons-material/Note";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ErrorIcon from "@mui/icons-material/Error";

function App() {
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  const [items, setItems] = useState([]);
  const [newitem, setNewitem] = useState("");
  // const unactiveRef = useRef(false);

  const handleInput = (e) => {
    const value = e.target.value;
    setNewitem(value);
  };
  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // const handleActive = () => {
  //   unactiveRef.current = !unactiveRef.current;
  // };
  // const classInlineItem = () => {
  //   return unactiveRef.current ? "active" : "unactive";
  // };

  const [unactive, setUnactive] = useState(false);

  const handleActive = () => {
    setUnactive(!unactive);
  };

  const classInlineItem = () => {
    return unactive ? "active" : "unactive";
  };

  const handleButtonClick = () => {
    if (newitem === "") {
      alert("Invalid Input.");
    } else {
      setItems((items) => [...items, newitem]);
    }
  };

  const [alignment, setAlignment] = React.useState("");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div className="App">
      <h1 className="a">
        Todo List
        <Avatar sx={{ bgcolor: green[500] }} variant="square">
          <AssignmentIcon />
        </Avatar>
      </h1>
      <Grid item xs={12} md={6}>
        <Demo>
          <List>
            {items.map((item, index) => (
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteItem(index)}
                  >
                    <DeleteIcon sx={{ color: pink[500] }} />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <NoteIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  key={index}
                  primary={item}
                  onTouchMove={handleActive}
                  className={classInlineItem()}
                  // onClick={() => handleinlineItem(index)}
                />

                <Button variant="contained" onClick={handleActive}>
                  finshed Todo
                </Button>
              </ListItem>
            ))}
          </List>
        </Demo>
      </Grid>
      <br />
      <hr />
      <br />

      <Box
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          // width: "250ch",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="New Todo"
          variant="standard"
          type="text"
          required
          onChange={handleInput}
        />
        <br />
        <Stack direction="row" spacing={4}>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="1" aria-label="left aligned">
              <FavoriteIcon />
            </ToggleButton>
            <ToggleButton value="2" aria-label="centered">
              <AddTaskIcon />
            </ToggleButton>
            <ToggleButton value="3" aria-label="right aligned">
              <DoneAllIcon />
            </ToggleButton>
            <ToggleButton value="4" aria-label="right aligned">
              <AssignmentTurnedInIcon />
            </ToggleButton>
            <ToggleButton value="5" aria-label="right aligned">
              <ErrorIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <br />
        <Button variant="contained" onClick={handleButtonClick}>
          +Add
        </Button>
      </Box>
    </div>
  );
}

export default App;
