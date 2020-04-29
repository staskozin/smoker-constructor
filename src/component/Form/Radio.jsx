import React from 'react';

import s from './Radio.scss';

export default function Radio(props) {
  const { name, buttons, checked } = props.data;
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
                checked={checked === button.value}
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
