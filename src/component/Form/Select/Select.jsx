import React from 'react';

import s from './Select.scss';

export default function Select(props) {
  const sizes = props.data;
  const list = sizes[props.selectedList];
  return (
    <div className={s.wrap}>
      <select
        className={s.select}
        value={props.selected}
        name="size"
        onChange={(e) => props.change(e.target.value)}
      >
        {
          list.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            )
          })
        }
      </select>
      <img className={s.arrow} src="/_constructor/img/select-arrow.png" alt="&#8595;" />
    </div>
  )
}
