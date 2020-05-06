import React from 'react';
import { connect } from 'react-redux';

import {
  changeThickness,
  changeSteel,
  changeChips,
  changeSize,
  changeWaterlock,
  changeCover,
  changeHooks,
  changeStand,
  changeThermometer,
  changeFitting
} from '../../store/actions';

import Form from './Form';

function FormContainer(props) {
  return <Form
    thickness={props.thickness}
    steel={props.steel}
    chips={props.chips}
    size={props.size}
    sizeList={props.sizeList}
    waterlock={props.waterlock}
    cover={props.cover}
    hooks={props.hooks}
    stand={props.stand}
    thermometer={props.thermometer}
    fitting={props.fitting}
    changeThickness={props.changeThickness}
    changeSteel={props.changeSteel}
    changeChips={props.changeChips}
    changeSize={props.changeSize}
    changeWaterlock={props.changeWaterlock}
    changeCover={props.changeCover}
    changeHooks={props.changeHooks}
    changeStand={props.changeStand}
    changeThermometer={props.changeThermometer}
    changeFitting={props.changeFitting}
  />
}

const putStateToProps = state => {
  return {
    thickness: state.thickness,
    steel: state.steel,
    chips: state.chips,
    size: state.size,
    sizeList: state.sizeList,
    waterlock: state.waterlock,
    cover: state.cover,
    hooks: state.hooks,
    stand: state.stand,
    thermometer: state.thermometer,
    fitting: state.fitting
  }
};

const putActionsToProps = {
  changeThickness,
  changeSteel,
  changeChips,
  changeSize,
  changeWaterlock,
  changeCover,
  changeHooks,
  changeStand,
  changeThermometer,
  changeFitting
};

export default connect(putStateToProps, putActionsToProps)(FormContainer);
