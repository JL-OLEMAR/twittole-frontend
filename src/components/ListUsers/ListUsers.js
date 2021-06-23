import React from 'react'
import { map, isEmpty } from 'lodash'

import User from './User'
import './ListUsers.scss'

export default function ListUsers ({ users }) {
  if (isEmpty(users)) {
    return <h2 className="noData">No hay resultados</h2>
  }

  return (
    <ul className="list-users">
      {map(users, (user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  )
}
