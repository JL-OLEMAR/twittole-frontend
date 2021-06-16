import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUsers, faComment } from '@fortawesome/free-solid-svg-icons'

import BasicModal from '../../components/Modal/BasicModal'
import SignInForm from '../../components/SignInForm'
import SignUpForm from '../../components/SignUpForm'
import Logo from '../../assets/png/logo.png'
import LogoWhite from '../../assets/png/logo-white.png'
import './SignInSignUp.scss'

export default function SignInSignUp ({ setRefreshCheckLogin }) {
  const [showModal, setShowModal] = useState(false)
  const [contentModal, setContentModal] = useState(null)

  const openModal = (content) => {
    setShowModal(true)
    setContentModal(content)
  }

  return (
    <>
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent
            openModal={openModal}
            setShowModal={setShowModal}
            setRefreshCheckLogin={setRefreshCheckLogin}
          />
        </Row>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
      >
        {contentModal}
      </BasicModal>
    </>
  )
}

function LeftComponent () {
  return (
    <Col className="signin-signup__left" xs={6}>
      <img src={Logo} alt="Twittole" />
      <div>
        <h2>
          <FontAwesomeIcon icon={faSearch} />
          Sigue lo que te interesa.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUsers} />
          Entérate de qué está hablando la gente.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faComment} />
          Únete a la conversación.
        </h2>
      </div>
    </Col>
  )
}

function RightComponent ({ openModal, setShowModal, setRefreshCheckLogin }) {
  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
        <img src={LogoWhite} alt="Twittole" />
        <h2>Mira lo que está pasando en el mundo en este momento</h2>
        <h3>Únete a Twittole hoy mismo.</h3>
        <Button
          variant="primary"
          onClick={() => openModal(<SignUpForm setShowModal={setShowModal} />)}
        >
          Registrate
        </Button>

        <Button
          variant="outline-primary"
          onClick={() =>
            openModal(
              <SignInForm setRefreshCheckLogin={setRefreshCheckLogin} />
            )
          }
        >
          Iniciar sesion
        </Button>
      </div>
    </Col>
  )
}
