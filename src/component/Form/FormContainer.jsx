import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';

import { changeThickness, changeSteel } from '../../store/form/actions';

class FormContainer extends React.Component {
  render() {
    return (
      <Form
        radio={this.props.radio}
        thickness={this.props.thickness}
        steel={this.props.steel}
        changeThickness={this.props.changeThickness}
        changeSteel={this.props.changeSteel}
      />
    )
  }
}

const putStateToProps = (state) => {
  return {
    radio: state.form.radio,
    thickness: state.form.thickness,
    steel: state.form.steel
  }
};

const putActionsToProps = {
  changeThickness,
  changeSteel
};

export default connect(putStateToProps, putActionsToProps)(FormContainer);
