import styles from './HomePage.module.scss';
import Housings from '../Housings/Housings';

function HomePage() {
	return (
		<section className={styles.page}>
			<h1 className={styles.pageTitle}>Logements disponibles</h1>
			<Housings housings={{}} />
		</section>
	);
}

export default HomePage;
