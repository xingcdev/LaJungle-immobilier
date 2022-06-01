import styles from './HomePage.module.scss';
import Housings from '../Housings/Housings';
import { useFetchGet } from '@hooks/fetching';
import FilterForm from '../FilterForm/FilterForm';

function HomePage() {
	const { data, isLoading, error } = useFetchGet(
		`${process.env.REACT_APP_API_URL}/logement/getAll`
	);

	if (error) return <p>{error}</p>;

	return (
		<section className={styles.page}>
			<h1 className={styles.pageTitle}>Logements disponibles</h1>
			<Housings isLoading={isLoading} housings={data} />
			<FilterForm />
		</section>
	);
}

export default HomePage;
