import styles from './HomePage.module.scss';
import Housings from '../Housings/Housings';

function HomePage() {
	return (
		<section className={styles.page}>
			<h1 className={styles.pageTitle}>Liste de logements disponible en vente </h1>
			<Housings housings={{}} />
		</section>
	);
}

export default HomePage;
