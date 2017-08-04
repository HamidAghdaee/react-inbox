import React from 'react'
import {
  addWidget
} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const AddWidget = ({addWidget}) => {
  return (
    <button className="btn btn-danger" onClick={() => addWidget()}>
      Add widget
    </button>
  )
}


const mapDispatchToProps = dispatch => bindActionCreators({
  addWidget
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(AddWidget);
