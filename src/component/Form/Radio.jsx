import React from 'react';

import s from './Radio.scss';

export default class Radio extends React.Component {
  constructor(props) {
    super(props);
  }

  change(value) {
    this.props.change(value)
  }

  renderRadio() {
    const { name, buttons } = this.props.data;
    return buttons.map(button => {
      return (
        <label className={s.radiobuttons__elem} key={button.value}>
          <input
            className={s.input}
            type="radio"
            value={button.value}
            name={name}
            checked={this.props.selected === button.value}
            onChange={() => this.change(button.value)}
          />
          <span className={s.label}>{button.text}</span>
        </label>
      )
    });
  }

  render() {
    const { displayName, caption } = this.props.data;
    return (
      <>
        <span className={s.header}>{displayName}</span>
        <div className={s.radiobuttons}>
          {this.renderRadio()}
        </div>
        <p className={s.caption}>{caption}</p>
      </>
    )
  }
}
