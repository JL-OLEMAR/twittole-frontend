import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { AuthContext } from './utils/contexts'
import { isUserLogedApi } from './api/auth'
import SignInSignUp from './page/SignInSignUp'

export default function App () {
  const [user, setUser] = useState(null)
  const [loadUser, setLoadUser] = useState(false)
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false)

  useEffect(() => {
    setUser(isUserLogedApi())
    setRefreshCheckLogin(false)
    setLoadUser(true)
  }, [refreshCheckLogin])

  if (!loadUser) return null

  return (
    <AuthContext.Provider value={user}>
      { user
        ? (<h1>Estas logeado</h1>)
        : (<SignInSignUp setRefreshCheckLogin={setRefreshCheckLogin} />)
      }
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </AuthContext.Provider>
  )
}
