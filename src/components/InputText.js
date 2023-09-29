import React from 'react';
import PropTypes from 'prop-types';

function InputText(props) {
  const { value, className, onClick } = props;

  return (
    <input
      className={className}
      type="button"
      value={value}
      onClick={() => onClick(value)} // Pass the button value to the click handler
    />
  );
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
InputText.defaultProps = {
  className: null,
};

export default InputText;
