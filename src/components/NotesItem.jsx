import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function NotesItem(props) {
  const deleteItem = () => {
    props.deletenotes(props.id);
  };
  return (
    <>
      <Grid2 xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={deleteItem}>
              Close
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid2>
    </>
  );
}
