import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { increaseCounter } from '../redux/actions/counterActions';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <Button color='success' onClick={() => {
                    this.props.actions.increaseCounter();
                }}>
                    1 arttır
                </Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            increaseCounter: bindActionCreators(increaseCounter, dispatch)
        }
    }
}

export default connect(null, mapDispatchToProps)(IncreaseCounter);