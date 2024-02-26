import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseByTwoCounter } from '../redux/actions/counterActions'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <Button color='primary' onClick={() => {
                    this.props.actions.increaseByTwoCounter();
                }}>
                    2 arttır
                </Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ increaseByTwoCounter }, dispatch) }
}

export default connect(null, mapDispatchToProps)(IncreaseByTwoCounter);