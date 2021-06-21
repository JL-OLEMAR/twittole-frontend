import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faUsers, faPowerOff, faFeatherAlt } from '@fortawesome/free-solid-svg-icons'

import useAuth from '../../hooks/useAuth'
import { logoutApi } from '../../api/auth'
import TweetModal from '../Modal/TweetModal'

import LogoWhite from '../../assets/png/logo-white.png'
import './LeftMenu.scss'

export default function LeftMenu ({ setRefreshCheckLogin }) {
  const [showModal, setShowModal] = useState(false)
  const user = useAuth()

  const logout = () => {
    logoutApi()
    setRefreshCheckLogin(true)
  }

  return (
    <div className="left-menu">
      <Link to="/">
        <img className="logo" src={LogoWhite} alt="Twittole" />
      </Link>

      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> <span>Inicio</span>
      </Link>

      <Link to="/users">
        <FontAwesomeIcon icon={faUsers} /> <span>Usuarios</span>
      </Link>

      <Link to={`/${user?._id}`}>
        <FontAwesomeIcon icon={faUser} /> <span>Perfil</span>
      </Link>

      <Link to="" onClick={logout}>
        <FontAwesomeIcon icon={faPowerOff} /> <span>Cerrar sesión</span>
      </Link>

      <Button onClick={() => setShowModal(true)}>
        <FontAwesomeIcon icon={faFeatherAlt} />
        <span>Twittolear</span>
      </Button>

      <TweetModal show={showModal} setShow={setShowModal}/>
    </div>
  )
}
