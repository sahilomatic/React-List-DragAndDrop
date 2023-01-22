import { useReducer, useState, useContext } from "react";
import InputBox from "./Components/inputBox";

import { Reducer } from "./Reducer/reducerFunc";
import DisplayList from "./Components/displayList";

export default function App() {
  const [data, dispatch] = useReducer(Reducer, {
    completedTask: [],
    todolist: []
  });

  const handleTask = async (input) => {
    console.log("here", input);
    await dispatch({
      type: "ADD_TO_DOLIST",
      payLoad: input
    });

    await console.log(data);
  };

  const moveToCompleteTask = (input) => {
    dispatch({
      type: "MOVE_TO_COMPLETE",
      payLoad: input
    });
  };
  return (
    <div>
      <InputBox handleTask={handleTask} />
      <DisplayList data={data} moveToCompleteTask={moveToCompleteTask} />
    </div>
  );
}
