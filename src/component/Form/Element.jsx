import React from 'react';

import s from './Element.scss';

export default function Element(props) {
  return (
    <div>
      <span className={s.header}>{props.header}</span>
      {props.inputs}
      <p className={s.caption}>{props.caption}</p>
    </div>
  )
}
