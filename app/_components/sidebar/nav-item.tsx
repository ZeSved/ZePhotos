import Link from 'next/link'
import { SidebarContent } from './page'

export default function NavItem({ item }: { item: SidebarContent }) {
	return (
		<div>
			<Link href={item.href}>
				{item.imgSrc}
				<p>{item.name}</p>
			</Link>
		</div>
	)
}
