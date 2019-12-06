import React from 'react';
import PropTypes from 'prop-types';

function BaseTextArea({ label, placeholder, name, id, value, handleChanges }) {
  return (
    <>
      <label htmlFor={id} className="w-100 font-weight-bold">
        {label || ''}
        <textarea
          id={id}
          className="form-control"
          name={name}
          value={value}
          onChange={e => handleChanges(e.target.name, e.target.value)}
          placeholder={placeholder}
        />
      </label>
    </>
  );
}

BaseTextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};

BaseTextArea.defaultProps = {
  label: null,
  placeholder: null,
};

export default BaseTextArea;
