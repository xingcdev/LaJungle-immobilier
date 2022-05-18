import styles from './Sidebar.module.scss';
import { AppNavMenu } from '@components/layout';
import { UserProfile } from '@components/display';

function Sidebar() {
	return (
		<section className={styles.sidebar}>
			<UserProfile />
			<AppNavMenu />
		</section>
	);
}

export default Sidebar;
