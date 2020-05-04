import React from 'react';

import s from './Checkbox.scss';

export default function Checkbox(props) {
  const { name, displayName, price, nesting } = props.data;
  const { value, checked, disabled } = props.selected;
  return (
    <label className={`${s.checkbox} ${nesting ? s[`child_${nesting}`] : ''}`}>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => props.change(checked)}
      /> <span>{displayName}</span> <span className={s.checkbox__price}>{price ? `+${price}₽` : ''}</span>
    </label>
  )
}
