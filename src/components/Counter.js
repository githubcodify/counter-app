import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    render() {
        return (
            <h1 className='mt-5 mb-5 d-flex justify-content-center display-5'>
                {this.props.counter}
            </h1>
        )
    }
}

function mapStateToProps(state) {
    return { counter: state.counterReducer }
}

export default connect(mapStateToProps)(Counter)