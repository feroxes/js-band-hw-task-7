import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Task.scss';

import BaseButton from '../../ui/BaseButton';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isControlsShown: false,
    };
  }

  toggleControls = () => {
    this.setState(state => {
      return {
        isControlsShown: !state.isControlsShown,
      };
    });
  };

  editTask = task => {
    const { setEditableTask, toggleModal } = this.props;
    setEditableTask(task);
    toggleModal();
    this.toggleControls();
  };

  render() {
    const { task, index, toggleTaskStatus, deleteTask } = this.props;
    const { title, description, priority, isDone } = task;
    const { isControlsShown } = this.state;
    return (
      <div
        className={`task-item d-flex flex-column justify-content-between bg-light text-dark w-25 p-3 m-1 rounded ${
          isDone ? 'isDone' : null
        }`}
      >
        <h2 className="align-self-center font-weight-bold ">{title}</h2>
        <p>{description}</p>
        <div className="d-flex justify-content-between position-relative">
          <span className="p-2 border border-dark rounded">{priority}</span>
          <BaseButton
            className="p-2 border border-dark rounded"
            text=". . ."
            name="controls-btn"
            handleClick={this.toggleControls}
          />
          <div
            className={`flex-column controls-list position-absolute py-2 px-3 bg-light border border-dark rounded ${
              isControlsShown ? 'd-flex' : 'd-none'
            }`}
          >
            <BaseButton text="Done" name="done-btn" handleClick={() => toggleTaskStatus(index)} />
            <BaseButton text="Edit" name="edit-btn" handleClick={() => this.editTask(task)} />
            <BaseButton text="Delete" name="delete-btn" handleClick={() => deleteTask(index)} />
          </div>
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  toggleTaskStatus: PropTypes.func.isRequired,
  setEditableTask: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
export default Task;
