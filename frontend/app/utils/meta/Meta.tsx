import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

import logoImage from '@/assets/logoImage.png'

import { siteName, titleMerge } from '../../config/seo.config'
import { onlyText } from '../string/clearText'

import { ISeo } from './meta.interface'

const Meta: FC<ISeo> = ({ title, description, image = null, children }) => {
	const { asPath } = useRouter()

	const currentUrl = `${process.env.APP_URL}${asPath}`
	return (
		<>
			<title itemProp="headLine">{titleMerge(title)}</title>
			{description ? (
				<Head>
					<meta
						itemProp="description"
						name="description"
						content={onlyText(description, 152)}
					/>
					<link rel="canonical" href={currentUrl} />
					<meta property="og:locale" content="en" />
					<meta property="og:title" content={titleMerge(title)} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:image" content={image || logoImage} />
					<meta property="og:site_name" content={siteName} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
				</Head>
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
      {children}
		</>
	)
}

export default Meta
