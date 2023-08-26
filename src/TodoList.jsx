import React from "react";

const TodoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          class="bi bi-trash"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default TodoList;
