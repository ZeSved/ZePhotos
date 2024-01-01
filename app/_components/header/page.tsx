import Link from 'next/link'
import { MdAccountCircle } from 'react-icons/md'

export default function Header() {
	return (
		<header>
			<Link href='/user'>
				<MdAccountCircle />
			</Link>
		</header>
	)
}
