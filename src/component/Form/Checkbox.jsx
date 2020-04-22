import React from 'react';

import s from './Checkbox.scss';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, displayName, value, checked, nesting } = this.props.data;
    return (
      <label className={`${s.checkbox} ${nesting ? s[`child_${nesting}`] : ''}`}>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={() => this.props.change(checked)}
        /> {displayName}
      </label>
    )
  }
}
