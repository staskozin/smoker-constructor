import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';

class FormContainer extends React.Component {
  render() {
    return (
      <Form />
    )
  }
}

const putStateToProps = (state) => {
  return {}
};

const putActionsToProps = {};

export default connect(putStateToProps, putActionsToProps)(FormContainer);
