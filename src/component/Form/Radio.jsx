import React from 'react';

import s from './Radio.scss';

export default class Radio extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRadio() {
    const { name, buttons, checked } = this.props.data;
    return buttons.map(button => {
      return (
        <label className={s.radiobuttons__elem} key={button.value}>
          <input
            className={s.input}
            type="radio"
            value={button.value}
            name={name}
            checked={checked === button.value}
            onChange={() => this.props.change(button.value)}
          />
          <span className={s.label}>{button.text}</span>
        </label>
      )
    });
  }

  render() {
    return (
      <div className={s.radiobuttons}>
        {this.renderRadio()}
      </div>
    )
  }
}
