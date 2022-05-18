import styles from './HomePage.module.scss';
import Housings from '../Housings/Housings';

function HomePage() {
	return (
		<section className={styles.page}>
			<Housings housings={{}} />
		</section>
	);
}

export default HomePage;
