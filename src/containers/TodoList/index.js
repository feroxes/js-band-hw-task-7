import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';
import TasksList from '../../components/TasksList';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
      tasksList: [],
      filteredTasksList: [],
      useFilteredList: false,
      editableTask: null,
    };
  }

  toggleModal = () => {
    this.setState(state => {
      return {
        isModalShown: !state.isModalShown,
      };
    });
  };

  updateTasksList = tasksList => this.setState({ tasksList });

  updateFilteredTasksList = filteredTasksList => this.setState({ filteredTasksList });

  addTask = task => {
    const { tasksList } = this.state;
    tasksList.push(task);
    this.updateTasksList(tasksList);
  };

  toggleTaskStatus = index => {
    const { tasksList } = this.state;
    tasksList[index].isDone = !tasksList[index].isDone;
    this.updateTasksList(tasksList);
  };

  deleteTask = index => {
    const { tasksList } = this.state;
    tasksList.splice(index, 1);
    this.updateTasksList(tasksList);
  };

  updateTask = task => {
    const { tasksList } = this.state;
    tasksList.forEach((item, index) => {
      if (item.id === task.id) tasksList[index] = task;
    });
    this.updateTasksList(tasksList);
    this.setEditableTask();
  };

  setEditableTask = (editableTask = null) => this.setState({ editableTask });

  filterTasksList = (filterName, value) => {
    if (value === 'all' || (filterName === 'search' && !value.length))
      this.setState({ useFilteredList: false });
    else {
      const result =
        filterName === 'search' ? this.searchTask(value) : this.filterTasks(filterName, value);
      this.updateFilteredTasksList(result);
      this.setState({ useFilteredList: true });
    }
  };

  filterTasks = (filterName, value) => {
    const { tasksList } = this.state;
    return tasksList.filter(task => task[filterName] === value);
  };

  searchTask = searchValue => {
    const { tasksList } = this.state;
    return tasksList.filter(task => task.title.includes(searchValue));
  };

  render() {
    const {
      isModalShown,
      tasksList,
      filteredTasksList,
      useFilteredList,
      editableTask,
    } = this.state;
    return (
      <>
        <Menu toggleModal={this.toggleModal} filterTasksList={this.filterTasksList} />
        <TasksList
          tasksList={useFilteredList ? filteredTasksList : tasksList}
          toggleTaskStatus={this.toggleTaskStatus}
          setEditableTask={this.setEditableTask}
          toggleModal={this.toggleModal}
          deleteTask={this.deleteTask}
        />
        {isModalShown && (
          <Modal
            modalTitle="Create new item"
            isModalShown={isModalShown}
            editableTask={editableTask}
            updateTask={this.updateTask}
            toggleModal={this.toggleModal}
            addTask={this.addTask}
          />
        )}
      </>
    );
  }
}

export default TodoList;
