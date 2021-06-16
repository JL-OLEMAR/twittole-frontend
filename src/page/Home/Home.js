import React from 'react'

import BasicLayout from '../../layout/BasicLayout'
import './Home.scss'

export default function Home ({ setRefreshCheckLogin }) {
  return (
    <BasicLayout
      className="home"
      setRefreshCheckLogin={setRefreshCheckLogin}
    >
      <div className="home__title">
        <h2>Inicio</h2>
      </div>
    </BasicLayout>
  )
}
