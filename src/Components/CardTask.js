import React from "react";
import { Toast } from "react-bootstrap";

function CardTask({ task, index,deleteTask }) {
const handleClick=()=>{
  deleteTask(task.id)
}
  return (
    <Toast onClick={handleClick}>
      <Toast.Header>
        <strong className="me-auto">task{index + 1}</strong>
      </Toast.Header>
      <Toast.Body>{task.description}</Toast.Body>
    </Toast>
  );
}

export default CardTask;
