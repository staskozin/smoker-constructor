import React from 'react';

import s from './Checkbox.scss';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, displayName, value } = this.props.data;
    const nesting = this.props.nesting ? s[`child_${this.props.nesting}`] : '';
    return (
      <label className={`${s.checkbox} ${nesting}`}>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={this.props.selected}
          onChange={() => this.props.change(this.props.selected)}
        /> {displayName}
      </label>
    )
  }
}
