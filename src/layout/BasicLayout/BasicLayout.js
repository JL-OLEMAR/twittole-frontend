import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import LeftMenu from '../../components/LeftMenu'
import './BasicLayout.scss'

export default function BasicLayout ({ className, setRefreshCheckLogin, children }) {
  return (
    <Container className={`basic-layout ${className}`}>
      <Row>
        <Col xs={1} md={2} className="basic-layout__menu">
          <LeftMenu setRefreshCheckLogin={setRefreshCheckLogin} />
        </Col>
        <Col xs={11} md={10} className="basic-layout__content">
          {children}
        </Col>
      </Row>
    </Container>
  )
}
