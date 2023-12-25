import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<h2>Recently viewed</h2>
			<h2>Often viewed</h2>
		</main>
	)
}
