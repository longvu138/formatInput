import React, { useState } from 'react';

function DecimalInput(props) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    console.log('input', inputValue);
    const formattedValue = inputValue
      .replace(/\./g, '')
      .replace(/,/g, '.')
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');
    console.log('formattedValue', formattedValue);
    setValue(formattedValue);
    if (props.onChange) {
      props.onChange(formattedValue);
    }
  };

  const formatValue = (value) => {
    const parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return parts.join(',');
  };

  return (
    <input
      {...props}
      type="text"
      value={formatValue(value)}
      onChange={handleChange}
    />
  );
}

export default DecimalInput;
