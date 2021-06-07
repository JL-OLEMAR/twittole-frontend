import React from 'react'
import { Modal } from 'react-bootstrap'

import './BasicModal.scss'
import LogoWhite from '../../../assets/png/logo-white.png'

const BasicModal = ({ show, setShow, children }) => {
  return (
    <Modal
      className="basic-modal"
      show={show}
      onHide={() => setShow(false)}
      centered
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>
          <img src={LogoWhite} alt="Twittole" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  )
}

export default BasicModal
