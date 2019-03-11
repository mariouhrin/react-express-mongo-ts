import React from 'react';

export function Select({ data, handleChange }) {
  const name = 'select-gender';

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor={name}>
      Gender
      <select id={name} value={data.gender} className="form-dropdown" onChange={handleChange}>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </label>
  );
}
