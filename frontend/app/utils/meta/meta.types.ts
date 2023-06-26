import { StaticImageData } from "next/image"

export interface ISeo {
	title: string
	description?: string
	image?: StaticImageData | string
	children?:React.ReactNode
}
