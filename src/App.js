import React, { Component } from 'react'
import Counter from './components/Counter'
import IncreaseCounter from './components/IncreaseCounter'
import DecreaseCounter from './components/DecreaseCounter'
import IncreseByTwoCounter from './components/IncreaseByTwoCounter'
import { Col, Container, Row } from 'reactstrap'

export default class App extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: "48px 16px 56px" }}>
          <Container className='' style={{ padding: "32px 16px", background: "#fff", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.07), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)", border: "1px solid rgba(0, 0, 0, .16)"}}>
            <Row>
              <Counter />
            </Row>
            <Row>
              <Col className='d-flex justify-content-end align-items-center'><IncreaseCounter /></Col>
              <Col className='d-flex justify-content-center align-items-center'><DecreaseCounter /></Col>
              <Col className='d-flex justify-content-start align-items-center'><IncreseByTwoCounter /></Col>
            </Row>
          </Container>
        </Container>
      </div>
    )
  }
}
