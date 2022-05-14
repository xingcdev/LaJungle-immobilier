import styles from './HomePage.module.scss';
import { AppHeader } from '@components/layout';
import Housings from '../Housings/Housings';

function HomePage() {
	return (
		<section className={styles.page}>
			<AppHeader />
			<main>
				<Housings housings={{}} />
			</main>
		</section>
	);
}

export default HomePage;
