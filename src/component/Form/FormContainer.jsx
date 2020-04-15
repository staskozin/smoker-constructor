import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';

import { changeThickness, changeSteel, changeChips } from '../../store/form/actions';

class FormContainer extends React.Component {
  render() {
    return (
      <Form
        radio={this.props.radio}
        thickness={this.props.thickness}
        steel={this.props.steel}
        chips={this.props.chips}
        changeThickness={this.props.changeThickness}
        changeSteel={this.props.changeSteel}
        changeChips={this.props.changeChips}
      />
    )
  }
}

const putStateToProps = (state) => {
  return {
    radio: state.form.radio,
    thickness: state.form.thickness,
    steel: state.form.steel,
    chips: state.form.chips
  }
};

const putActionsToProps = {
  changeThickness,
  changeSteel,
  changeChips
};

export default connect(putStateToProps, putActionsToProps)(FormContainer);
