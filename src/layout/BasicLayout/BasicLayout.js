import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import LeftMenu from '../../components/LeftMenu'
import './BasicLayout.scss'

const BasicLayout = ({ className, setRefreshCheckLogin, children }) => {
  return (
    <Container className={`basic-layout ${className}`}>
      <Row>
        <Col xs={4} md={3} className="basic-layout__menu">
          <LeftMenu setRefreshCheckLogin={setRefreshCheckLogin} />
        </Col>
        <Col xs={8} md={9} className="basic-layout__content">
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default BasicLayout
