import { FC } from 'react'
import s from './Menu.module.scss'
import { IMenu } from './menu.interface'
import MenuItem from './MenuItem'
import AuthItems from './auth/AuthItems'

const Menu:FC<{menu:IMenu}> = ({menu:{items,title}}) => {
  return (
    <div className={s.menu}>
<div className={s.title}>{title}</div>
<ul className={s.ul}>
  {items.map(item => (
    <MenuItem key={item.link} item={item}/>
  ))}
  {title === 'General' ? <AuthItems /> : null}
</ul>
    </div>
  )
}

export default Menu