import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

import BaseInput from '../ui/BaseInput';
import BaseTextArea from '../ui/BaseTextArea';
import BaseSelect from '../ui/BaseSelect';
import BaseButton from '../ui/BaseButton';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      priority: '',
      id: Number(new Date()),
      isDone: false,
    };
  }

  componentDidMount() {
    const { editableTask } = this.props;
    if (editableTask) this.setState({ ...editableTask });
  }

  handleChanges = (name, value) => this.setState({ [name]: value });

  clearState = () => {
    const initialState = {
      title: '',
      description: '',
      priority: '',
      id: Number(new Date()),
      isDone: false,
    };

    this.setState({ ...initialState });
  };

  handleOnSaveButtonClick = () => {
    const { editableTask, addTask, updateTask, toggleModal } = this.props;
    if (editableTask) updateTask(this.state);
    else addTask(this.state);
    this.clearState();
    toggleModal();
  };

  render() {
    const { modalTitle, toggleModal } = this.props;
    const { title, description, priority } = this.state;
    return (
      <div className="modal-wrapper d-flex vw-100 vh-100 position-fixed overflow-auto justify-content-center align-items-center">
        <form className="base-modal w-25 rounded p-3">
          <h2 className="modal-title font-weight-bold text-center">{modalTitle}</h2>
          <div className="add-item-form">
            <div className="my-3">
              <BaseInput
                label="Title:"
                placeholder="Title"
                value={title}
                name="title"
                id="title"
                handleChanges={this.handleChanges}
              />
            </div>
            <div className="my-3">
              <BaseTextArea
                id="description-area"
                label="Description:"
                name="description"
                value={description}
                placeholder="Enter description..."
                handleChanges={this.handleChanges}
              />
            </div>
            <div className="my-3">
              <BaseSelect
                label="Priority:"
                name="priority"
                value={priority}
                optionList={['Select an option', 'high', 'normal', 'low']}
                handleChanges={this.handleChanges}
              />
            </div>
            <div className="buttons-wrapper w-100 d-flex justify-content-between align-items-center my-2">
              <BaseButton
                text="Save"
                name="save-btn"
                handleClick={this.handleOnSaveButtonClick}
                className="save-btn btn btn-light w-50 bg-success"
              />
              <BaseButton
                text="Cancel"
                name="cancel-btn"
                handleClick={toggleModal}
                className="cancel-btn btn btn-light w-50 bg-danger"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  editableTask: PropTypes.instanceOf(Object),
};

Modal.defaultProps = {
  editableTask: null,
};

export default Modal;
