import React, { useState } from "react";
import TodoList from "./TodoList";
import "./TodoList.css";

const TododList = () => {
  const [inputList, setInputList] = useState("");
  const [items, setitems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setitems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setitems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo Lost </h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {items.map((itemvalue, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  text={itemvalue}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TododList;
