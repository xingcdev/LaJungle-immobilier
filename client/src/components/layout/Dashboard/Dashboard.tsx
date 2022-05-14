import { Outlet } from 'react-router-dom';
import styles from './Dashboard.module.scss';
import Sidebar from '@layout/navigation/Sidebar/Sidebar';

function Dashboard() {
	return (
		<section className={styles.dashboard}>
			<Sidebar />
			<Outlet />
		</section>
	);
}

export default Dashboard;
