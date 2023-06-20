import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import "./page.css";

export default function Service_Card(props) {
  const [seeMoreLess, setSeeMoreLess] = useState(false);
  return (
    <Grid md={3}>
      <Card>
        <CardMedia sx={{ height: 250 }} image={props.imgSrc} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={seeMoreLess ? "active service-content" : "service-content"}>
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" target="_blank" href={props.link}>
            Share
          </Button>
          <Button
            size="small"
            onClick={() => {
              setSeeMoreLess((oldValue) => !oldValue);
            }}
          >
            {seeMoreLess ? "View Less" : "View More"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
