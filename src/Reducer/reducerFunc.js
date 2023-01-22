export function Reducer(currentState, action) {
  console.log(action.type);
  switch (action.type) {
    case "ADD_TO_DOLIST":
      return {
        ...currentState,
        todolist: [...currentState.todolist, action.payLoad]
      };

    case "MOVE_TO_COMPLETE":
      return {
        completedTask: [...currentState.completedTask, action.payLoad],
        todolist: currentState.todolist.filter((elem) => elem != action.payLoad)
      };

    default:
      return currentState;
  }
}
