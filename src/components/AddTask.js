import React from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../Actions/taskAction";
import "../AppRedux.css";

const AddTask = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
    dispatch(
      addTask({ id: uuidv4(), description: description, isDone: false })
    );
    setDescription("");
  };

  return (
    <div>
      <InputGroup className="mb-3 ">
        <Form.Control
          value={description}
          placeholder="Write a new task here !!"
          aria-label="Write a new task here !!"
          aria-describedby="basic-addon2"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleSubmit}
        >
          Add
        </Button>
      </InputGroup>
    </div>
  );
};

export default AddTask;
