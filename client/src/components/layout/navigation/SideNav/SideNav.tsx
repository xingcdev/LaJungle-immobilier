import styles from './SideNav.module.scss';
import { Link } from 'react-router-dom';

function SideNav() {
	return (
		<section className={styles.side_nav}>
			<section className={styles.profile}>
				<section className={styles.photo}>
					<img
						src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						alt="photo"
						width={150}
						height={150}
					/>
				</section>
				<p className={styles.name}>CHEN Xingounette</p>
			</section>
			<section className={styles.navigation_section}>
				<h2 className={styles.nav_title}>Menu</h2>
				<nav>
					<ul>
						<li>
							<Link to="/home">Logements</Link>
						</li>
						<li>
							<Link to="/transactions">Transactions</Link>
						</li>
					</ul>
				</nav>
			</section>
		</section>
	);
}

export default SideNav;
