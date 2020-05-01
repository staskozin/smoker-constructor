import React from 'react';
import { connect } from 'react-redux';

import { changeQuantity, blurQuantity } from '../store/actions';

import s from './Info.scss';

function Info(props) {
  const price = props.quantity == 1 || props.quantity === '' ? '' : <span className={s.price}>{formatPrice(props.price)}/шт.</span>;
  return (
    <ul className={s.info}>
      <li className={s.info__item}>
        <button
          className={s.button}
          onClick={() => window.cart.add(314, Number(props.quantity), convertStateToRequestData(props))}
        >В корзину</button>
      </li>

      <li className={`${s.info__item} ${s.info__item_quantity}`}>
        <input
          className={s.quantity}
          type="number"
          min="1"
          max="9999"
          onChange={(e) => props.changeQuantity(e.target.value)}
          onBlur={(e) => props.blurQuantity(e.target.value)}
          value={props.quantity}
        />&nbsp;шт.
        </li>

      <li className={`${s.info__item} ${s.info__item_price}`}>{formatPrice(props.total)} {price}</li>
    </ul>
  )
}

function formatPrice(price) {
  var res = "";
  if (String(price).length < 5)
    res = String(price);
  else
    for (var i = String(price).length - 1, j = 0; i >= 0; i--, j++) {
      if (j % 3 === 0 && j !== 0) {
        res = ' ' + res;
      }
      res = String(price).charAt(i) + res;
    }
  return res + ' ₽';
}

function convertStateToRequestData(state) {
  const { chips, size, cover, hooks, stand, thermometer, fitting } = state;
  let data = '';
  data += '&option[354]=' + chips;
  data += '&option[356]=' + size;
  if (cover.checked && !cover.disabled)
    data += '&option[355][]=' + cover.value;
  if (hooks.checked && !hooks.disabled)
    data += '&option[355][]=' + hooks.value;
  if (stand.checked)
    data += '&option[355][]=' + stand.value;
  if (thermometer.checked)
    data += '&option[355][]=' + thermometer.value;
  if (fitting.checked)
    data += '&option[355][]=' + fitting.value;
  return data;
}

const putStateToProps = state => {
  return {
    price: state.price,
    quantity: state.quantity,
    total: state.total,
    chips: state.chips,
    size: state.size,
    cover: state.cover,
    hooks: state.hooks,
    stand: state.stand,
    thermometer: state.thermometer,
    fitting: state.fitting
  }
};

const putActionsToProps = {
  changeQuantity,
  blurQuantity
}

export default connect(putStateToProps, putActionsToProps)(Info);
