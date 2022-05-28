import styles from './HomePage.module.scss';
import Housings from '../Housings/Housings';
import { useFetchGet } from '@hooks/fetching';

function HomePage() {
	const { data, isLoading, error } = useFetchGet(
		`${process.env.REACT_APP_API_URL}/logement/getAll`
	);

	return (
		<section className={styles.page}>
			<h1 className={styles.pageTitle}>Logements disponibles</h1>
			<Housings isLoading={isLoading} housings={data} />
		</section>
	);
}

export default HomePage;
