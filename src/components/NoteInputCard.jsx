import React, {useState} from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function NoteInputCard(props) {
  const [showTrue, setShowTrue] = useState(false);
  const [valueStore, setValueStore] = useState({
    title: "",
    content: "",
  });
  const handelChange = (e) => {
    const {name, value} = e.target;
    setValueStore((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

  const valueGenerate = () => {
    props.valuePass(valueStore);
    setValueStore({
      title: "",
      content: "",
    });
  };

  const showOther = () => {
    setShowTrue(true);
  };
  const showLess = () => {
    setShowTrue(false);
  };
  return (
    <Card className="input-holder" onDoubleClick={showLess}>
      <form>
        <h3>Put a Notes</h3>
        {showTrue ? <input type="text" name="title" placeholder="Title" value={valueStore.title} onChange={handelChange} /> : null}
        <textarea name="content" value={valueStore.content} placeholder="Message" onChange={handelChange} onFocus={showOther}></textarea>
        {showTrue ? (
          <Button variant="contained" className="btn" disabled={!valueStore.title} onClick={valueGenerate}>
            <AddIcon />
          </Button>
        ) : null}
      </form>
    </Card>
  );
}
