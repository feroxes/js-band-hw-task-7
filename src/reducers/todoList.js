import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  SET_EDITABLE_TASK,
  DELETE_EDITABLE_TASK,
  TOGGLE_TASK_STATUS,
  FILTER_BY,
  SEARCH_BY_TITLE,
} from '../actions/todoList';

const initialState = {
  tasksList: [],
  editableTask: null,
  filteredTasksList: [],
  useFilteredList: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasksList: [...state.tasksList, payload],
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasksList: state.tasksList.map(item => {
          // eslint-disable-next-line no-param-reassign
          if (item.id === payload.id) item = payload;
          return item;
        }),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasksList: state.tasksList.filter(item => item.id !== payload.id),
      };
    case SET_EDITABLE_TASK:
      return {
        ...state,
        editableTask: payload,
      };
    case DELETE_EDITABLE_TASK:
      return {
        ...state,
        editableTask: payload,
      };
    case TOGGLE_TASK_STATUS:
      return {
        ...state,
        tasksList: state.tasksList.map(item => {
          // eslint-disable-next-line no-param-reassign
          if (item.id === payload.id) item.isDone = !item.isDone;
          return item;
        }),
      };
    case FILTER_BY: {
      return {
        ...state,
        filteredTasksList: state.tasksList.filter(item => item[payload.name] === payload.value),
        useFilteredList: payload.value !== 'all',
      };
    }
    case SEARCH_BY_TITLE: {
      return {
        ...state,
        filteredTasksList: state.tasksList.filter(item => item.title.includes(payload)),
        useFilteredList: Boolean(payload.length),
      };
    }
    default:
      return state;
  }
};
