import React from 'react';
import { connect } from 'react-redux';

import s from './View.scss';

function View(props) {
  return (
    <>
      {!props.isHookHidden &&
        <img
          className={`${s.hook} img-responsive`}
          src={`img/states/${props.hook}.png`}
          alt="Крючки для подвешивания продуктов"
        />
      }
      <img className={`img-responsive`} src={`img/states/${props.src}.jpg`} alt={props.src} />
    </>
  )
}

const putStateToProps = state => {
  return {
    hook: state.img.hook,
    isHookHidden: state.img.isHookHidden,
    src: state.img.src
  };
}

export default connect(putStateToProps)(View);
