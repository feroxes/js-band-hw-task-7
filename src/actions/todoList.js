export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_EDITABLE_TASK = 'SET_EDITABLE_TASK';
export const DELETE_EDITABLE_TASK = 'SET_EDITABLE_TASK';
export const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS';
export const FILTER_BY = 'FILTER_BY';
export const SEARCH_BY_TITLE = 'SEARCH_BY_TITLE';

export const addNewTask = data => {
  return {
    type: ADD_TASK,
    payload: data,
  };
};

export const updateTask = data => {
  return {
    type: UPDATE_TASK,
    payload: data,
  };
};

export const deleteTask = data => {
  return {
    type: DELETE_TASK,
    payload: data,
  };
};

export const setEditableTask = data => {
  return {
    type: SET_EDITABLE_TASK,
    payload: data,
  };
};

export const deleteEditableTask = () => {
  return {
    type: DELETE_EDITABLE_TASK,
    payload: null,
  };
};

export const toggleTaskStatus = data => {
  return {
    type: TOGGLE_TASK_STATUS,
    payload: data,
  };
};

export const filterBy = data => {
  return {
    type: FILTER_BY,
    payload: data,
  };
};
export const searchByTitle = data => {
  return {
    type: SEARCH_BY_TITLE,
    payload: data,
  };
};
