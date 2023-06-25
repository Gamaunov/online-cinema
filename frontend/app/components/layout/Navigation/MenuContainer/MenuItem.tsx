import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC } from 'react'

import s from './Menu.module.scss'
import { IMenuItem } from './menu.interface'
import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[s.active]: asPath === item.link,
			})}
		>
      <Link href={item.link}>
        <div>
          <MaterialIcon name={item.icon}/>
          <span>{item.title}</span>
        </div>
      </Link>
    </li>
	)
}

export default MenuItem
