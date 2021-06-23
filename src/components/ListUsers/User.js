import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Media, Image } from 'react-bootstrap'

import { API_HOST } from '../../utils/constants'
import { getUserApi } from '../../api/user'
import AvatarNoFound from '../../assets/png/avatar-no-found.png'

export default function User ({ user }) {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    getUserApi(user.id).then((response) => {
      setUserInfo(response)
    })
  }, [user])

  return (
    <Media as={Link} to={`/${user.id}`} className="list-users__user">
      <Image
        width={64}
        height={64}
        roundedCircle
        loading="lazy"
        className="mr-3"
        src={
          userInfo?.avatar
            ? `${API_HOST}/obtenerAvatar?id=${user.id}`
            : AvatarNoFound
        }
        alt={`${user.nombre} ${user.apellidos}`}
      />
      <Media.Body>
        <h5>{user.nombre} {user.apellidos}</h5>
        <p>{userInfo?.biografia}</p>
      </Media.Body>
    </Media>
  )
}
