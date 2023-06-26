import { FC } from 'react'
import s from './Sidebar.module.scss'
import Search from './Search/Search'
import MoviesContainer from './MoviesContainer/MoviesContainer'

const Sidebar:FC = () => {
  return (
    <div className={s.sidebar}>
      <Search />
      <MoviesContainer />
    </div>
  )
}

export default Sidebar