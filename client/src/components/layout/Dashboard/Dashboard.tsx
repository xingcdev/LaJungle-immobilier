import { Outlet } from 'react-router-dom';
import styles from './Dashboard.module.scss';
import { Sidebar, AppHeader } from '@components/layout';

function Dashboard() {
	return (
		<section className={styles.dashboard}>
			<aside>
				<Sidebar />
			</aside>
			<AppHeader />
			<main className={styles.content}>
				<Outlet />
			</main>
		</section>
	);
}

export default Dashboard;
