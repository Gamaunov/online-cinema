import { FC } from 'react'
import s from './Navigation.module.scss'
import Logo from './Logo'
import MenuContainer from './MenuContainer/MenuContainer'

const Navigation:FC = () => {
  return (
    <div className={s.navigation}>
      <Logo />
      <MenuContainer />
    </div>
  )
}

export default Navigation