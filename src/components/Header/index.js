import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

function Header({ children }) {
  return (
    <header className="w-100 d-flex justify-content-center align-items-center header">
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
