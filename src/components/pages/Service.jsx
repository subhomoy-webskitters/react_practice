import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import "./page.css";
import Servicecard from "./Servicecard";
import CmsData from "./CmsData";

export default function Service() {
  const navigate = useNavigate();
  return (
    <div>
      <Box className="full-height-wrapper">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {CmsData.serviceData.map((item) => {
              return <Servicecard key={item.id} imgSrc={item.imgSrc} title={item.title} content={item.content} link={item.links} />;
            })}
          </Grid>
          <Button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
            variant="outlined"
            className="mt-40"
          >
            Back
          </Button>
        </Container>
      </Box>
      <Outlet />
    </div>
  );
}
