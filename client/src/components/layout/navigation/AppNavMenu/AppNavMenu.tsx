import styles from './AppNavMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline, IoCardOutline, IoPeopleOutline } from 'react-icons/io5';

function Sidebar() {
	const links = [
		{
			title: 'Logements',
			to: '/',
			icon: <IoHomeOutline className={styles.icon} />,
		},
		{
			title: 'Transactions',
			to: 'transactions',
			icon: <IoCardOutline className={styles.icon} />,
		},
		{
			title: 'Visites',
			to: '/visits',
			icon: <IoPeopleOutline className={styles.icon} />,
		},
	];

	return (
		<nav aria-labelledby="sidebar-navigation" className={styles.app_nav_menu}>
			<h2 className={styles.nav_title}>Menu</h2>

			<ul>
				{links.map((link, index) => (
					<li key={index} className={styles.nav_item}>
						<NavLink
							to={link.to}
							className={({ isActive }) =>
								isActive ? styles.is_active : undefined
							}
						>
							{link.icon}
							{link.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Sidebar;
