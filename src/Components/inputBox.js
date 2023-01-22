import "./inputBox.css";
import { useState } from "react";

export default function InputBox({ handleTask }) {
  const [inputTask, setInputTask] = useState("");
  const handleChange = (e) => {
    if (e.target.value && e.keyCode === 13) {
      handleTask(inputTask);
      setInputTask("");
    }
  };

  return (
    <div className="input-box">
      <input
        type="text"
        value={inputTask}
        onChange={(e) => {
          setInputTask(e.target.value);
        }}
        onKeyDown={(e) => {
          handleChange(e);
        }}
        placeholder="Enter Task To Add"
      />
    </div>
  );
}
