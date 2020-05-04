import React from 'react';

import s from './Radio.scss';

export default function Radio(props) {
  const { name, buttons } = props.data;
  return (
    <div className={s.radiobuttons}>
      {
        buttons.map(button => {
          return (
            <label className={s.radiobuttons__elem} key={button.value}>
              <input
                className={s.input}
                type="radio"
                value={button.value}
                name={name}
                checked={props.selected === button.value}
                onChange={() => props.change(button.value)}
              />
              <span className={s.label}>{button.text}</span>
            </label>
          )
        })
      }
    </div>
  )
}
