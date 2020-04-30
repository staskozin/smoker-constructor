import React from 'react';
import { connect } from 'react-redux';

import s from './View.scss';

function View(props) {
  return (
    <>
      {!props.isHooksHidden &&
        <img
          className={`${s.hook} img-responsive`}
          src={`img/states/${props.hooksSrc}.png`}
          alt="Крючки для подвешивания продуктов"
        />
      }
      <img className={`img-responsive`} src={`img/states/${props.src}.jpg`} alt={props.src} />
    </>
  )
}

const putStateToProps = state => {
  return {
    hooksSrc: state.img.hooksSrc,
    isHooksHidden: state.img.isHooksHidden,
    src: state.img.src
  };
}

export default connect(putStateToProps)(View);
