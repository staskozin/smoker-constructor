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

  getSizeState(thickness, waterlock, steel) {
    const list = '' + thickness + Number(waterlock) + steel;
    return {
      list: list,
      selected: this.state.select.sizes[list][0].value
    }
  }

  changeThickness(value) {
    let steel = this.state.radio.steel.checked;
    let waterlock = this.state.checkbox.waterlock.checked;
    const checkbox = this.state.checkbox;
    if (value === 0 || value === 1) {
      steel = 1;
      waterlock = true;
      checkbox.waterlock.checked = true;
      checkbox.cover.disabled = false;
      if (checkbox.cover.checked) {
        checkbox.hooks.disabled = false;
      }
    }
    this.setState({
      radio: {
        ...this.state.radio,
        thickness: {
          ...this.state.radio.thickness,
          checked: value
        },
        steel: {
          ...this.state.radio.steel,
          checked: steel
        }
      },
      select: {
        ...this.state.select,
        size: this.getSizeState(value, waterlock, steel)
      },
      checkbox: checkbox
    })
  }

  changeSteel(value) {
    const thickness = this.state.radio.thickness.checked === 0 || this.state.radio.thickness.checked === 1 ? 2 : this.state.radio.thickness.checked;
    let waterlock = this.state.checkbox.waterlock.checked;
    const checkbox = this.state.checkbox;
    if (value === 0 && (this.state.radio.thickness.checked === 2 || this.state.radio.thickness.checked === 3)) {
      waterlock = true;
      checkbox.waterlock.checked = true;
      checkbox.cover.disabled = false;
      if (checkbox.cover.checked) {
        checkbox.hooks.disabled = false;
      }
    }
    this.setState({
      radio: {
        ...this.state.radio,
        thickness: {
          ...this.state.radio.thickness,
          checked: thickness
        },
        steel: {
          ...this.state.radio.steel,
          checked: value
        }
      },
      select: {
        ...this.state.select,
        size: this.getSizeState(thickness, waterlock, value)
      },
      checkbox: checkbox
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
          selected: Number(value)
        }
      }
    })
  }

  changeWaterlock() {
    const radio = this.state.radio;
    const thickness = radio.thickness.checked === 0 || radio.thickness.checked === 1 ? 2 : radio.thickness.checked;
    const steel = radio.steel.checked === 0 && (radio.thickness.checked === 2 || radio.thickness.checked === 3) ? 1 : radio.steel.checked;
    radio.thickness.checked = thickness;
    radio.steel.checked = steel;
    this.setState({
      radio: radio,
      select: {
        ...this.state.select,
        size: this.getSizeState(thickness, !this.state.checkbox.waterlock.checked, steel)
      },
      checkbox: {
        ...this.state.checkbox,
        waterlock: {
          ...this.state.checkbox.waterlock,
          checked: !this.state.checkbox.waterlock.checked
        },
        cover: {
          ...this.state.checkbox.cover,
          disabled: this.state.checkbox.waterlock.checked
        },
        hooks: {
          ...this.state.checkbox.hooks,
          disabled: !this.state.checkbox.cover.checked || !this.state.checkbox.cover.disabled
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
        },
        hooks: {
          ...this.state.checkbox.hooks,
          disabled: this.state.checkbox.cover.checked
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
