import React from 'react';

import { inputsMapping, generateInputObject } from './helpers';

export function Inputs({ data, handleChange, range }) {
  const inputsMap = inputsMapping(range);

  const inputsToRender = inputsMap.map((input) => {
    const { labelName, inputObject } = generateInputObject(
      input.id,
      data,
      handleChange,
      input.type
    );
    const { id } = inputObject;

    return (
      <label key={id} htmlFor={id}>
        {labelName}
        <input key={id} {...inputObject} required />
      </label>
    );
  });

  return inputsToRender;
}
