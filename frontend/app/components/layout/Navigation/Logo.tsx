import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@/assets/logo.png'

const Logo: FC = () => {
	return (
		<Link href="/">
			<div className="px-layout mb-10 block">
				<Image
					src={logo}
					width={247}
					height={34}
					alt="online-cinema"
					draggable={false}
				/>
			</div>
		</Link>
	)
}

export default Logo
