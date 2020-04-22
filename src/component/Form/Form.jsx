import React from 'react';

import s from './Form.scss';

import Radio from './Radio';
import Checkbox from './Checkbox';

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

        <span className={s.header}>Аксессуары</span>
        <Checkbox
          data={this.props.checkbox.waterlock}
          selected={this.props.waterlock}
          change={this.props.changeWaterlock}
        />
        <Checkbox
          data={this.props.checkbox.cover}
          selected={this.props.cover}
          change={this.props.changeCover}
          nesting={1}
        />
        <Checkbox
          data={this.props.checkbox.hooks}
          selected={this.props.hooks}
          change={this.props.changeHooks}
          nesting={2}
        />
        <Checkbox
          data={this.props.checkbox.stand}
          selected={this.props.stand}
          change={this.props.changeStand}
        />
        <Checkbox
          data={this.props.checkbox.thermometer}
          selected={this.props.thermometer}
          change={this.props.changeThermometer}
        />
        <Checkbox
          data={this.props.checkbox.fitting}
          selected={this.props.fitting}
          change={this.props.changeFitting}
        />

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
