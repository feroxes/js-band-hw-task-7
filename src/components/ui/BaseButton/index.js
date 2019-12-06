import React from 'react';
import PropTypes from 'prop-types';

function BaseButton({ name, text, handleClick, className }) {
  return (
    <>
      <button type="button" name={name} onClick={handleClick} className={className}>
        {text}
      </button>
    </>
  );
}

BaseButton.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

BaseButton.defaultProps = {
  className: '',
};

export default BaseButton;
