import React from 'react';

import s from './Select.scss';

export default function Select(props) {
  const { sizes, size } = props.data;
  const list = sizes[size.list];
  return (
    <div className={s.wrap}>
      <select
        className={s.select}
        value={props.data.size.selected}
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
      <img className={s.arrow} src="img/select-arrow.png" alt="↓" />
    </div>
  )
}
 