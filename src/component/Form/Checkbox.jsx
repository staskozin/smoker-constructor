import React from 'react';

import s from './Checkbox.scss';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, displayName, value, price, checked, disabled, nesting } = this.props.data;
    return (
      <label className={`${s.checkbox} ${nesting ? s[`child_${nesting}`] : ''}`}>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={() => this.props.change(checked)}
        /> <span>{displayName}</span> <span className={s.checkbox__price}>{price ? `+${price}₽` : ''}</span>
      </label>
    )
  }
}
