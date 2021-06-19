import { API_HOST } from '../utils/constants'
import { getTokenApi } from './auth'

// chequeo de un usuario siguiendo
export function checkFollowApi (idUser) {
  const url = `${API_HOST}/consultaRelacion?id=${idUser}`

  const params = {
    headers: {
      Authorization: `Bearer ${getTokenApi()}`
    }
  }

  return fetch(url, params)
    .then(response => {
      return response.json()
    })
    .then(result => {
      return result
    })
    .catch(err => {
      return err
    })
}

// usuario a seguir
export function followUserApi (idUser) {
  const url = `${API_HOST}/altaRelacion?id=${idUser}`

  const params = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getTokenApi()}`
    }
  }

  return fetch(url, params)
    .then(response => {
      return response.json()
    })
    .then(result => {
      return result
    })
    .catch(err => {
      return err
    })
}

// usuario dejar de seguir
export function unfollowUserApi (idUser) {
  const url = `${API_HOST}/bajaRelacion?id=${idUser}`

  const params = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getTokenApi()}`
    }
  }

  return fetch(url, params)
    .then(response => {
      return response.json()
    })
    .then(result => {
      return result
    })
    .catch(err => {
      return err
    })
}
