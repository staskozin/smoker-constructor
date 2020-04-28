import React from 'react';

import s from './Form.scss';

import Radio from './Radio';
import Select from './Select';
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
          change={this.props.changeThickness}
        />
        <p className={s.caption}>{this.props.radio.thickness.caption}</p>

        <span className={s.header}>{this.props.radio.steel.displayName}</span>
        <Radio
          data={this.props.radio.steel}
          change={this.props.changeSteel}
        />
        <p className={s.caption}>{this.props.radio.steel.caption}</p>

        <span className={s.header}>Размер</span>
        <Select
          data={this.props.select}
          change={this.props.changeSize}
        />
        <p className={s.caption}>Длина × Ширина × Высота</p>

        <span className={s.header}>Аксессуары</span>
        <Checkbox
          data={this.props.checkbox.waterlock}
          change={this.props.changeWaterlock}
        />
        <Checkbox
          data={this.props.checkbox.cover}
          change={this.props.changeCover}
        />
        <Checkbox
          data={this.props.checkbox.hooks}
          change={this.props.changeHooks}
        />
        <Checkbox
          data={this.props.checkbox.stand}
          change={this.props.changeStand}
        />
        <Checkbox
          data={this.props.checkbox.thermometer}
          change={this.props.changeThermometer}
        />
        <Checkbox
          data={this.props.checkbox.fitting}
          change={this.props.changeFitting}
        />

        <span className={s.header}>{this.props.radio.chips.displayName}</span>
        <Radio
          data={this.props.radio.chips}
          change={this.props.changeChips}
        />
        <p className={s.caption}>{this.props.radio.chips.caption}</p>
      </form>
    )
  }
}
