import styles from './AppNavMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline, IoCardOutline } from 'react-icons/io5';

function Sidebar() {
	return (
		<section>
			<h4 className={styles.nav_title}>Menu</h4>
			<nav className={styles.app_nav_menu}>
				<ul>
					<li className={styles.nav_item}>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? styles.is_active : undefined
							}
						>
							<IoHomeOutline className={styles.icon} />
							Logements
						</NavLink>
					</li>

					<li className={styles.nav_item}>
						<NavLink
							to="/sales"
							className={({ isActive }) =>
								isActive ? styles.is_active : undefined
							}
						>
							<IoCardOutline className={styles.icon} />
							Transactions
						</NavLink>
					</li>
				</ul>
			</nav>
		</section>
	);
}

export default Sidebar;
