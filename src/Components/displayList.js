import "./inputBox.css";
import { useState } from "react";
export default function DisplayList({ data, moveToCompleteTask }) {
  const [selectedIndex, setSelectedIndex] = useState();
  const [mouseIn, setMouseIn] = useState(false);
  return (
    <div className="display">
      <div className="todolist">
        <h4 style={{ margin: "20px", justifyContent: "center" }}>To Do List</h4>
        <ul>
          {data.todolist.map((str, index) => {
            return (
              <li
                key={index}
                draggable
                onDragStart={() => {
                  setSelectedIndex(str);
                }}
                onDragEnd={() => {
                  console.log(mouseIn);
                  if (mouseIn) {
                    moveToCompleteTask(selectedIndex);
                  }
                }}
              >
                <span>{str}</span>
                <span>
                  <button
                    className="button"
                    onClick={() => {
                      moveToCompleteTask(str);
                    }}
                  >
                    Done
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="completedList"
        onDragEnter={() => {
          console.log("enter");
          setMouseIn(true);
        }}
        onDragLeave={() => {
          console.log("leave");
          setMouseIn(false);
        }}
      >
        <h4 style={{ margin: "20px", justifyContent: "center" }}>
          Completed List
        </h4>
        <ul>
          {data.completedTask.map((str, index) => {
            return <li key={index}>{str}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
