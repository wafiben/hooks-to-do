import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
function Add({ addTask }) {
  const [task, setTask] = useState({ id: 3, description: "", done: false });
  const handleChange = (event) => {
    setTask({
      id: Math.floor(Math.random() * 10000) + 1,
      description: event.target.value,
      done: false,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTask(task)
  };
  
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>TASK</Form.Label>
        <Form.Control
          type="text"
          placeholder="write your task here"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default Add;
