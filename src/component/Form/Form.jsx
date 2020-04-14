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
        <Radio
          data={this.props.radio.thickness}
          selected={this.props.thickness}
          change={this.props.changeThickness}
        />
        <Radio
          data={this.props.radio.steel}
          selected={this.props.steel}
          change={this.props.changeSteel}
        />
      </form>
    )
  }
}
