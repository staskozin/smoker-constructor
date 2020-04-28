import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';

import {
  changeThickness,
  changeSteel,
  changeChips
} from '../../store/form/radio/actions';

import {
  changeSize
} from '../../store/form/select/actions';

import {
  changeWaterlock,
  changeCover,
  changeHooks,
  changeStand,
  changeThermometer,
  changeFitting
} from '../../store/form/checkbox/actions';

class FormContainer extends React.Component {
  render() {
    return (
      <Form
        radio={this.props.radio}
        select={this.props.select}
        checkbox={this.props.checkbox}
        changeThickness={this.props.changeThickness}
        changeSteel={this.props.changeSteel}
        changeChips={this.props.changeChips}
        changeSize={this.props.changeSize}
        changeWaterlock={this.props.changeWaterlock}
        changeCover={this.props.changeCover}
        changeHooks={this.props.changeHooks}
        changeStand={this.props.changeStand}
        changeThermometer={this.props.changeThermometer}
        changeFitting={this.props.changeFitting}
      />
    )
  }
}

const putStateToProps = (state) => {
  return {
    radio: state.form.radio,
    checkbox: state.form.checkbox,
    select: state.form.select
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
