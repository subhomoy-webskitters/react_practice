import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./page.css";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";

export default function CommonLayout(props) {
  const location = useLocation();

  return (
    <Box className="full-height-wrapper">
      <Container maxWidth="xl">
        <Grid container spacing={2} className="align-center">
          <Grid md={6}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
          </Grid>
          <Grid md={6}>
            <img src={props.imgSrc} alt="" />
          </Grid>
        </Grid>
        {location.pathname === "/contact" ? <ContactForm /> : null}
      </Container>
    </Box>
  );
}
