import styles from './HomePage.module.scss';
import Housings from '../Housings/Housings';
import { useEffect, useState } from 'react';

function HomePage() {
	const [housingsData, sethousingsData] = useState({});

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/logement/getAll`)
			.then((response) => {
				if (response.ok) return response.json();
				throw response;
			})
			.then((data) => {
				sethousingsData(data);
			})
			.catch((error) => console.log(error))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<section className={styles.page}>
			<h1 className={styles.pageTitle}>Logements disponibles</h1>
			<Housings isLoading={isLoading} housings={housingsData} />
		</section>
	);
}

export default HomePage;
