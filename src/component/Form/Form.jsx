import React from 'react';

import s from './Form.scss';

import Radio from './Radio';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className={s.form}>
        <span className={s.header}>{this.props.radio.thickness.displayName}</span>
        <Radio
          data={this.props.radio.thickness}
          selected={this.props.thickness}
          change={this.props.changeThickness}
        />
        <p className={s.caption}>{this.props.radio.thickness.caption}</p>

        <span className={s.header}>{this.props.radio.steel.displayName}</span>
        <Radio
          data={this.props.radio.steel}
          selected={this.props.steel}
          change={this.props.changeSteel}
        />
        <p className={s.caption}>{this.props.radio.steel.caption}</p>

        <span className={s.header}>{this.props.radio.chips.displayName}</span>
        <Radio
          data={this.props.radio.chips}
          selected={this.props.chips}
          change={this.props.changeChips}
        />
        <p className={s.caption}>{this.props.radio.chips.caption}</p>
      </form>
    )
  }
}
