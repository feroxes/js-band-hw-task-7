import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

function TasksList({ tasksList, toggleModal }) {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {tasksList.map((task, index) => {
        return (
          <Task
            task={task}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            toggleModal={toggleModal}
          />
        );
      })}
    </div>
  );
}

TasksList.propTypes = {
  tasksList: PropTypes.instanceOf(Array).isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default TasksList;
