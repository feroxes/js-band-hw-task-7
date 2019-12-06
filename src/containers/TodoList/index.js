import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';
import TasksList from '../../components/TasksList';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
    };
  }

  toggleModal = () => {
    this.setState(state => {
      return {
        isModalShown: !state.isModalShown,
      };
    });
  };

  render() {
    const { isModalShown } = this.state;
    const { tasksList, filteredTasksList, useFilteredList } = this.props;
    return (
      <>
        <Menu toggleModal={this.toggleModal} filterTasksList={this.filterTasksList} />
        <TasksList
          tasksList={useFilteredList ? filteredTasksList : tasksList}
          toggleModal={this.toggleModal}
        />
        {isModalShown && (
          <Modal
            modalTitle="Create new item"
            isModalShown={isModalShown}
            toggleModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}

TodoList.propTypes = {
  tasksList: PropTypes.instanceOf(Array).isRequired,
  filteredTasksList: PropTypes.instanceOf(Array).isRequired,
  useFilteredList: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  tasksList: state.todoList.tasksList,
  filteredTasksList: state.todoList.filteredTasksList,
  useFilteredList: state.todoList.useFilteredList,
});

export default connect(mapStateToProps)(TodoList);
