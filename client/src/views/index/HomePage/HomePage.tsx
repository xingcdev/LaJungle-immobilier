import styles from './HomePage.module.scss';
import { AppHeader } from '@components/layout';

function HomePage() {
	return (
		<section className={styles.page}>
			<AppHeader />
		</section>
	);
}

export default HomePage;
