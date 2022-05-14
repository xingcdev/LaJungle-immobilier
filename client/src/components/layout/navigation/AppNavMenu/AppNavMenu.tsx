import styles from './AppNavMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline, IoCardOutline } from 'react-icons/io5';

function Sidebar() {
	return (
		<nav aria-labelledby='sidebar-navigation' className={styles.app_nav_menu}>
			<h2 className={styles.nav_title}>Menu</h2>

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
	);
}

export default Sidebar;
