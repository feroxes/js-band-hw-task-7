import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Task.scss';
import { setEditableTask, toggleTaskStatus, deleteTask } from '../../../actions/todoList';

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
    const { onSetEditableTask, toggleModal } = this.props;
    onSetEditableTask(task);
    toggleModal();
    this.toggleControls();
  };

  render() {
    const { task, onToggleTaskStatus, onDeleteTask } = this.props;
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
            <BaseButton text="Done" name="done-btn" handleClick={() => onToggleTaskStatus(task)} />
            <BaseButton text="Edit" name="edit-btn" handleClick={() => this.editTask(task)} />
            <BaseButton text="Delete" name="delete-btn" handleClick={() => onDeleteTask(task)} />
          </div>
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.instanceOf(Object).isRequired,
  onToggleTaskStatus: PropTypes.func.isRequired,
  onSetEditableTask: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    onSetEditableTask: data => dispatch(setEditableTask(data)),
    onToggleTaskStatus: data => dispatch(toggleTaskStatus(data)),
    onDeleteTask: data => dispatch(deleteTask(data)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Task);
