import React from 'react';

import s from './Info.scss';

export default class Info extends React.Component {
  render() {
    return (
      <ul className={s.info}>
        <li className={`${s.info__item}`}>
          <button className={s.button}>В корзину</button>
        </li>

        <li className={`${s.info__item} ${s.info__item_quantity}`}>
          <input className={s.quantity} min="1" max="9999" type="number" />&nbsp;шт.
        </li>
        
        <li className={`${s.info__item} ${s.info__item_price}`}>3680&#8201;₽</li>
      </ul>
    )
  }
}
