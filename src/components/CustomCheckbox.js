import React from 'react';
import './CustomCheckbox.css'; // Import custom CSS for the checkbox component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark">
        {checked && <FontAwesomeIcon icon={faCheck} style={{color: "#ffffff",}} />}
      </span>
      {label}
    </label>
  );
};

export default CustomCheckbox;
