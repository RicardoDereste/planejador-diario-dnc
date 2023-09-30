import React from 'react'
import './index.scss'
import Menu from '../../components/Menu/Menu'
import List from '../../components/List/List'

const Home = () => {
  return (
    <div className='home'>
        <Menu />
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        <List />
    </div>
  )
}

export default Home