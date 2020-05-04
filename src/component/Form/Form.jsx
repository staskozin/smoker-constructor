import React from 'react';

import { store } from '../../main';
import { updateSmoker } from '../../store/actions';

import s from './Form.scss';

import Element from './Element/Element';

import Radio from './Radio/Radio';
import radioData from './Radio/data';

import Select from './Select/Select';
import selectData from './Select/data';

import Checkbox from './Checkbox/Checkbox';
import checkboxData from './Checkbox/data';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      thickness: 0,
      steel: 1,
      chips: 1092,
      size: 1099,
      sizeList: '011',
      waterlock: {
        value: 0,
        checked: true,
        disabled: false
      },
      cover: {
        value: 1096,
        checked: false,
        disabled: false
      },
      hooks: {
        value: 1098,
        checked: false,
        disabled: true
      },
      stand: {
        value: 1094,
        checked: false,
        disabled: false
      },
      thermometer: {
        value: 1095,
        checked: false,
        disabled: false
      },
      fitting: {
        value: 1097,
        checked: false,
        disabled: false
      }
    };
  }

  componentDidUpdate() {
    store.dispatch(updateSmoker(this.state, this.getPrice()))
  }

  getPrice() {
    let price = selectData[this.state.sizeList].find(elem => elem.value === this.state.size).price;
    for (const key in checkboxData) {
      price += this.state[key].checked && !this.state[key].disabled ? checkboxData[key].price : 0;
    }
    return price;
  }

  getSize(thickness, waterlock, steel) {
    const list = '' + thickness + Number(waterlock) + steel;
    return {
      sizeList: list,
      size: selectData[list][0].value
    }
  }

  changeThickness(value) {
    let steel = this.state.steel;
    let waterlockChecked = this.state.waterlock.checked;
    let coverDisabled = this.state.cover.disabled;
    let hooksDisabled = this.state.hooks.disabled;
    if (value === 0 || value === 1) {
      steel = 1;
      waterlockChecked = true;
      coverDisabled = false;
      if (this.state.cover.checked) {
        hooksDisabled = false;
      }
    }
    this.setState({
      thickness: value,
      steel: steel,
      ...this.getSize(value, waterlockChecked, steel),
      waterlock: {
        ...this.state.waterlock,
        checked: waterlockChecked
      },
      cover: {
        ...this.state.cover,
        disabled: coverDisabled
      },
      hooks: {
        ...this.state.hooks,
        disabled: hooksDisabled
      }
    })
  }

  changeSteel(value) {
    const thickness = this.state.thickness === 0 || this.state.thickness === 1 ? 2 : this.state.thickness;
    let waterlockChecked = this.state.waterlock.checked;
    let coverDisabled = this.state.cover.disabled;
    let hooksDisabled = this.state.hooks.disabled;
    if (value === 0 && (this.state.thickness === 2 || this.state.thickness === 3)) {
      waterlockChecked = true;
      coverDisabled = false;
      if (this.state.cover.checked) {
        hooksDisabled = false;
      }
    }
    this.setState({
      thickness: thickness,
      steel: value,
      ...this.getSize(thickness, waterlockChecked, value),
      waterlock: {
        ...this.state.waterlock,
        checked: waterlockChecked
      },
      cover: {
        ...this.state.cover,
        disabled: coverDisabled
      },
      hooks: {
        ...this.state.hooks,
        disabled: hooksDisabled
      }
    })
  }

  changeChips(value) {
    this.setState({
      chips: value
    })
  }

  changeSize(value) {
    this.setState({
      size: Number(value)
    })
  }

  changeWaterlock() {
    const thickness = this.state.thickness === 0 || this.state.thickness === 1 ? 2 : this.state.thickness;
    const steel = this.state.steel === 0 && (this.state.thickness === 2 || this.state.thickness === 3) ? 1 : this.state.steel;
    this.setState({
      thickness: thickness,
      steel: steel,
      ...this.getSize(thickness, !this.state.waterlock.checked, steel),
      waterlock: {
        ...this.state.waterlock,
        checked: !this.state.waterlock.checked
      },
      cover: {
        ...this.state.cover,
        disabled: this.state.waterlock.checked
      },
      hooks: {
        ...this.state.hooks,
        disabled: !this.state.cover.checked || !this.state.cover.disabled
      }
    })
  }

  changeCover() {
    this.setState({
      cover: {
        ...this.state.cover,
        checked: !this.state.cover.checked
      },
      hooks: {
        ...this.state.hooks,
        disabled: this.state.cover.checked
      }
    })
  }

  changeHooks() {
    this.setState({
      hooks: {
        ...this.state.hooks,
        checked: !this.state.hooks.checked
      }
    })
  }

  changeStand() {
    this.setState({
      stand: {
        ...this.state.stand,
        checked: !this.state.stand.checked
      }
    })
  }

  changeThermometer() {
    this.setState({
      thermometer: {
        ...this.state.thermometer,
        checked: !this.state.thermometer.checked
      }
    })
  }

  changeFitting() {
    this.setState({
      fitting: {
        ...this.state.fitting,
        checked: !this.state.fitting.checked
      }
    })
  }

  render() {
    return (
      <form className={s.form}>
        <Element
          header={radioData.thickness.displayName}
          caption={radioData.thickness.caption}
          inputs={<Radio data={radioData.thickness} selected={this.state.thickness} change={this.changeThickness.bind(this)} />}
        />

        <Element
          header={radioData.steel.displayName}
          caption={radioData.steel.caption}
          inputs={<Radio data={radioData.steel} selected={this.state.steel} change={this.changeSteel.bind(this)} />}
        />

        <Element
          header="Размер"
          caption="Длина × Ширина × Высота"
          inputs={<Select
            data={selectData}
            selectedList={this.state.sizeList}
            selected={this.state.size}
            change={this.changeSize.bind(this)}
          />}
        />

        <Element
          header="Аксессуары"
          inputs={[
            <Checkbox
              data={checkboxData.waterlock}
              selected={this.state.waterlock}
              change={this.changeWaterlock.bind(this)}
              key={this.state.waterlock.value}
            />,
            <Checkbox
              data={checkboxData.cover}
              selected={this.state.cover}
              change={this.changeCover.bind(this)}
              key={this.state.cover.value}
            />,
            <Checkbox
              data={checkboxData.hooks}
              selected={this.state.hooks}
              change={this.changeHooks.bind(this)}
              key={this.state.hooks.value}
            />,
            <Checkbox
              data={checkboxData.stand}
              selected={this.state.stand}
              change={this.changeStand.bind(this)}
              key={this.state.stand.value}
            />,
            <Checkbox
              data={checkboxData.thermometer}
              selected={this.state.thermometer}
              change={this.changeThermometer.bind(this)}
              key={this.state.thermometer.value} />,
            <Checkbox
              data={checkboxData.fitting}
              selected={this.state.fitting}
              change={this.changeFitting.bind(this)}
              key={this.state.fitting.value}
            />
          ]}
        />

        <Element
          header={radioData.chips.displayName}
          caption={radioData.chips.caption}
          inputs={<Radio data={radioData.chips} selected={this.state.chips} change={this.changeChips.bind(this)} />}
        />
      </form>
    )
  }
}
