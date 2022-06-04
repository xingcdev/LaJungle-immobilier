import styles from './HomePage.module.scss';
import HousingsList from '../HousingsList/HousingsList';
import { useFetchGet } from '@hooks/fetching';

function HomePage() {
	const { data, setData, isLoading, error } = useFetchGet(
		`${process.env.REACT_APP_API_URL}/logement/getAll`
	);

	if (error) return <p>{error}</p>;

	return (
		<section className={styles.page}>
			<h1 className={styles.pageTitle}>Logements disponibles</h1>
			<HousingsList
				isLoading={isLoading}
				housings={data}
				setHousingsData={setData}
			/>
		</section>
	);
}

export default HomePage;
