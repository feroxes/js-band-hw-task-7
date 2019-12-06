import React from 'react';
import PropTypes from 'prop-types';

function BaseInput({ label, placeholder, name, id, type, value, handleChanges }) {
  return (
    <>
      <label htmlFor={id} className="w-100 font-weight-bold">
        {label || ''}
        <input
          type={type}
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

BaseInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};

BaseInput.defaultProps = {
  label: null,
  type: 'text',
  placeholder: null,
};

export default BaseInput;
