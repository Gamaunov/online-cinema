import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@/assets/logoImage.png'

const Logo: FC = () => {
	return (
		<Link href="/">
			<div className="px-layout mb-10 block">
				<Image
					src={logo}
					width={50}
					height={20}
					alt="online-cinema"
					draggable={false}
				/>
			</div>
		</Link>
	)
}

export default Logo
