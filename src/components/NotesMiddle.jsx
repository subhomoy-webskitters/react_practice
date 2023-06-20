import React, {useState} from "react";
import "./notes.css";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import NotesItem from "./NotesItem";
import NoteInputCard from "./NoteInputCard";

export default function NotesMiddle() {
  const [cardValue, setCardValue] = useState([]);
  const valuePass = (valueStore) => {
    setCardValue((oldValue) => {
      return [...oldValue, valueStore];
    });
  };
  const deletenotes = (id) => {
    setCardValue((currentValue) => {
      return currentValue.filter((value, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Container maxWidth="xl" className="common-gap min-height-60">
        <NoteInputCard valuePass={valuePass} />
        <Grid2 container spacing={2} className="mt-40">
          {cardValue.map((val, index) => {
            return <NotesItem key={index} id={index} title={val.title} content={val.content} deletenotes={deletenotes} />;
          })}
        </Grid2>
      </Container>
    </>
  );
}
