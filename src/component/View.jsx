import React from 'react';

import s from './View.scss';

export default class From extends React.Component {
  render() {
    return (
      <>
        <img className={`${s.hook} img-responsive`} src="img/states/kruk_low.png" alt="Крючки для подвешивания продуктов" />
        <img className={`img-responsive`} src="img/states/10000.jpg" alt="10000" />
      </>
    )
  }
}
