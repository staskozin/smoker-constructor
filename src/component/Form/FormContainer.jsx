import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';

import {
  changeThickness,
  changeSteel,
  changeChips,
  changeWaterlock,
  changeCover,
  changeHooks,
  changeStand,
  changeThermometer,
  changeFitting
} from '../../store/form/actions';

class FormContainer extends React.Component {
  render() {
    return (
      <Form
        radio={this.props.radio}
        thickness={this.props.thickness}
        steel={this.props.steel}
        chips={this.props.chips}
        checkbox={this.props.checkbox}
        waterlock={this.props.waterlock}
        cover={this.props.cover}
        hooks={this.props.hooks}
        stand={this.props.stand}
        thermometer={this.props.thermometer}
        fitting={this.props.fitting}
        changeThickness={this.props.changeThickness}
        changeSteel={this.props.changeSteel}
        changeChips={this.props.changeChips}
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
    thickness: state.form.thickness,
    steel: state.form.steel,
    chips: state.form.chips,
    checkbox: state.form.checkbox,
    waterlock: state.form.waterlock,
    cover: state.form.cover,
    hooks: state.form.hooks,
    stand: state.form.stand,
    thermometer: state.form.thermometer,
    fitting: state.form.fitting,
  }
};

const putActionsToProps = {
  changeThickness,
  changeSteel,
  changeChips,
  changeWaterlock,
  changeCover,
  changeHooks,
  changeStand,
  changeThermometer,
  changeFitting
};

export default connect(putStateToProps, putActionsToProps)(FormContainer);
