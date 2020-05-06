import React from 'react';

import s from './Form.scss';

import Element from './Element/Element';

import Radio from './Radio/Radio';
import radioData from './Radio/data';

import Select from './Select/Select';
import selectData from './Select/data';

import Checkbox from './Checkbox/Checkbox';
import checkboxData from './Checkbox/data';

export default function Form(props) {
  return (
    <form className={s.form}>
      <Element
        header={radioData.thickness.displayName}
        caption={radioData.thickness.caption}
        inputs={<Radio data={radioData.thickness} selected={props.thickness} change={props.changeThickness} />}
      />

      <Element
        header={radioData.steel.displayName}
        caption={radioData.steel.caption}
        inputs={<Radio data={radioData.steel} selected={props.steel} change={props.changeSteel} />}
      />

      <Element
        header="Размер"
        caption="Длина × Ширина × Высота"
        inputs={<Select
          data={selectData}
          selectedList={props.sizeList}
          selected={props.size}
          change={props.changeSize}
        />}
      />

      <Element
        header="Аксессуары"
        inputs={[
          <Checkbox
            data={checkboxData.waterlock}
            selected={props.waterlock}
            change={props.changeWaterlock}
            key={props.waterlock.value}
          />,
          <Checkbox
            data={checkboxData.cover}
            selected={props.cover}
            change={props.changeCover}
            key={props.cover.value}
          />,
          <Checkbox
            data={checkboxData.hooks}
            selected={props.hooks}
            change={props.changeHooks}
            key={props.hooks.value}
          />,
          <Checkbox
            data={checkboxData.stand}
            selected={props.stand}
            change={props.changeStand}
            key={props.stand.value}
          />,
          <Checkbox
            data={checkboxData.thermometer}
            selected={props.thermometer}
            change={props.changeThermometer}
            key={props.thermometer.value} />,
          <Checkbox
            data={checkboxData.fitting}
            selected={props.fitting}
            change={props.changeFitting}
            key={props.fitting.value}
          />
        ]}
      />

      <Element
        header={radioData.chips.displayName}
        caption={radioData.chips.caption}
        inputs={<Radio data={radioData.chips} selected={props.chips} change={props.changeChips} />}
      />
    </form>
  )
}
