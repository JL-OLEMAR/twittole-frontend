import React from 'react'
import BasicLayout from '../../layout/BasicLayout'

import './Home.scss'

const Home = ({ setRefreshCheckLogin }) => {
  return (
    <BasicLayout
      className="home"
      setRefreshCheckLogin={setRefreshCheckLogin}
    >
      <h2>Home...</h2>
    </BasicLayout>
  )
}

export default Home
