import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faUsers, faPowerOff } from '@fortawesome/free-solid-svg-icons'

import useAuth from '../../hooks/useAuth'
import { logoutApi } from '../../api/auth'

import LogoWhite from '../../assets/png/logo-white.png'
import './LeftMenu.scss'

export default function LeftMenu ({ setRefreshCheckLogin }) {
  const user = useAuth()

  const logout = () => {
    logoutApi()
    setRefreshCheckLogin(true)
  }

  return (
    <div className="left-menu">
      <img className="logo" src={LogoWhite} alt="Twittole" />

      <Link to="/">
        <FontAwesomeIcon icon={faHome}/> Inicio
      </Link>

      <Link to="/users">
        <FontAwesomeIcon icon={faUsers}/> Usuarios
      </Link>

      <Link to={`/${user?._id}`}>
        <FontAwesomeIcon icon={faUser}/> Perfil
      </Link>

      <Link to="" onClick={logout}>
        <FontAwesomeIcon icon={faPowerOff}/> Cerrar sesión
      </Link>

      <Button>Twittolear</Button>
    </div>
  )
}
