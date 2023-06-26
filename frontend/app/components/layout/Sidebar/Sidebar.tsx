import { FC } from 'react'
import s from './Sidebar.module.scss'
import Search from './Search/Search'

const Sidebar:FC = () => {
  return (
    <div className={s.sidebar}>
      <Search />
      
    </div>
  )
}

export default Sidebar