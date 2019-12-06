import React from 'react';
import PropTypes from 'prop-types';

function BaseSelect({ name, optionList, label, disabledFirstElement, handleChanges, value }) {
  return (
    <>
      <span className="font-weight-bold ">{label}</span>
      <select
        name={name}
        onChange={e => {
          handleChanges(e.target.name, e.target.value);
        }}
        className="custom-select text-capitalize"
        value={value}
      >
        {optionList.map((item, index) => {
          return (
            <option disabled={disabledFirstElement && !index} key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
}

BaseSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabledFirstElement: PropTypes.bool,
  optionList: PropTypes.instanceOf(Array).isRequired,
  handleChanges: PropTypes.func.isRequired,
};

BaseSelect.defaultProps = {
  label: null,
  disabledFirstElement: false,
};

export default BaseSelect;
