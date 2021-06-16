import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

import useAuth from '../../hooks/useAuth'
import { getUserApi } from '../../api/user'
import BasicLayout from '../../layout/BasicLayout'
import BannerAvatar from '../../components/User/BannerAvatar'
import InfoUser from '../../components/User/InfoUser'

import './User.scss'

function User ({ match, setRefreshCheckLogin }) {
  const [user, setUser] = useState(null)
  const { params } = match
  const loggedUser = useAuth()

  useEffect(() => {
    getUserApi(params.id)
      .then((response) => {
        if (!response) toast.error('El usuario que has visitado no existe')
        setUser(response)
      })
      .catch(() => {
        toast.error('El usuario que has visitado no existe')
      })
  }, [params])

  return (
    <BasicLayout className="user" setRefreshCheckLogin={setRefreshCheckLogin}>
      <div className="user__title">
        <h2>
          {user ? `${user.nombre} ${user.apellidos}` : 'Este usuario no existe'}
        </h2>
      </div>
      <BannerAvatar user={user} loggedUser={loggedUser} />
      <InfoUser user={user} />
      <div className="user__tweets">Lista de Tweets!</div>
    </BasicLayout>
  )
}

export default withRouter(User)
