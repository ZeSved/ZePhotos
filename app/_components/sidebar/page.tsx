import Link from 'next/link'
import Image from 'next/image'
import iconLogo from '@/public/ZePhotos.png'
import s from './sidebar.module.css'
import { ImageType } from '@/types/types'
import NavItem from './nav-item'
import { FaHeart } from 'react-icons/fa'

export default function Sidebar() {
	const sidebarContent: SidebarContent[] = [
		{
			name: 'Liked',
			href: '/liked',
			content: [],
			imgSrc: <FaHeart />,
		},
	]

	return (
		<div>
			<div className={s.wrapper}>
				<div className={s.logo}>
					<Link href='/'>
						<Image
							src={iconLogo}
							alt=''
						/>
					</Link>
				</div>
				<nav>
					<ul>
						{sidebarContent.map((item, i) => (
							<li key={i}>
								<NavItem item={item} />
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	)
}

export type SidebarContent = {
	name: string
	href: string
	imgSrc: React.ReactNode
	content: ImageType[]
}
