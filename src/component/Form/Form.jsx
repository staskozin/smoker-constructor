import React from 'react';

import { store } from '../../main';
import { updateSmoker } from '../../store/actions';
import initialState from './initialState';

import s from './Form.scss';

import Element from './Element';
import Radio from './Radio';
import Select from './Select';
import Checkbox from './Checkbox';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState;
  }

  componentDidUpdate() {
    store.dispatch(updateSmoker(this.state))
  }

  changeThickness(value) {
    this.setState({
      radio: {
        ...this.state.radio,
        thickness: {
          ...this.state.radio.thickness,
          checked: value
        }
      }
    })
  }

  changeSteel(value) {
    this.setState({
      radio: {
        ...this.state.radio,
        steel: {
          ...this.state.radio.steel,
          checked: value
        }
      }
    })
  }

  changeChips(value) {
    this.setState({
      radio: {
        ...this.state.radio,
        chips: {
          ...this.state.radio.chips,
          checked: value
        }
      }
    })
  }

  changeSize(value) {
    this.setState({
      select: {
        ...this.state.select,
        size: {
          ...this.state.select.size,
          selected: value
        }
      }
    })
  }

  changeWaterlock() {
    this.setState({
      checkbox: {
        ...this.state.checkbox,
        waterlock: {
          ...this.state.checkbox.waterlock,
          checked: !this.state.checkbox.waterlock.checked
        }
      }
    })
  }

  changeCover() {
    this.setState({
      checkbox: {
        ...this.state.checkbox,
        cover: {
          ...this.state.checkbox.cover,
          checked: !this.state.checkbox.cover.checked
        }
      }
    })
  }

  changeHooks() {
    this.setState({
      checkbox: {
        ...this.state.checkbox,
        hooks: {
          ...this.state.checkbox.hooks,
          checked: !this.state.checkbox.hooks.checked
        }
      }
    })
  }

  changeStand() {
    this.setState({
      checkbox: {
        ...this.state.checkbox,
        stand: {
          ...this.state.checkbox.stand,
          checked: !this.state.checkbox.stand.checked
        }
      }
    })
  }

  changeThermometer() {
    this.setState({
      checkbox: {
        ...this.state.checkbox,
        thermometer: {
          ...this.state.checkbox.thermometer,
          checked: !this.state.checkbox.thermometer.checked
        }
      }
    })
  }

  changeFitting() {
    this.setState({
      checkbox: {
        ...this.state.checkbox,
        fitting: {
          ...this.state.checkbox.fitting,
          checked: !this.state.checkbox.fitting.checked
        }
      }
    })
  }

  render() {
    return (
      <form className={s.form}>
        <Element
          header={this.state.radio.thickness.displayName}
          caption={this.state.radio.thickness.caption}
          inputs={<Radio data={this.state.radio.thickness} change={this.changeThickness.bind(this)} />}
        />

        <Element
          header={this.state.radio.steel.displayName}
          caption={this.state.radio.steel.caption}
          inputs={<Radio data={this.state.radio.steel} change={this.changeSteel.bind(this)} />}
        />

        <Element
          header="Размер"
          caption="Длина × Ширина × Высота"
          inputs={<Select data={this.state.select} change={this.changeSize.bind(this)} />}
        />

        <Element
          header="Аксессуары"
          inputs={[
            <Checkbox data={this.state.checkbox.waterlock} change={this.changeWaterlock.bind(this)} key={this.state.checkbox.waterlock.value} />,
            <Checkbox data={this.state.checkbox.cover} change={this.changeCover.bind(this)} key={this.state.checkbox.cover.value} />,
            <Checkbox data={this.state.checkbox.hooks} change={this.changeHooks.bind(this)} key={this.state.checkbox.hooks.value} />,
            <Checkbox data={this.state.checkbox.stand} change={this.changeStand.bind(this)} key={this.state.checkbox.stand.value} />,
            <Checkbox data={this.state.checkbox.thermometer} change={this.changeThermometer.bind(this)} key={this.state.checkbox.thermometer.value} />,
            <Checkbox data={this.state.checkbox.fitting} change={this.changeFitting.bind(this)} key={this.state.checkbox.fitting.value} />
          ]}
        />

        <Element
          header={this.state.radio.chips.displayName}
          caption={this.state.radio.chips.caption}
          inputs={<Radio data={this.state.radio.chips} change={this.changeChips.bind(this)} />}
        />
      </form>
    )
  }
}
