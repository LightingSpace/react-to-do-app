const initialState = {
  task: '',
  taskList: []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === 'Add_Task') {
    newState.taskList = [...newState.taskList, newState.task];
    newState.task = '';
  }
  if (action.type === 'Change_Task') {
    newState.task = action.value.target.value;
  }

  if (action.type === 'Remove_Item') {
    const indexToRemove = action.value.currentTarget.parentNode.id;
    console.log(indexToRemove);
    newState.taskList = newState.taskList.filter(
      (elem, index) => index != indexToRemove
    );
  }
  return newState;
};

export default reducer;
