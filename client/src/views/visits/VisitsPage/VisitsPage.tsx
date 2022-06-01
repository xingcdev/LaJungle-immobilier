import styles from './VisitsPage.module.scss';
import { useFetchGet } from '@hooks/fetching';
import VisitsList from '../VisitsList/VisitsList';

// export default function VisitsPage() {
	// return (
		// <section className={styles.page}>
			// <h1 className={styles.pageTitle}>Visites à venir</h1>
			// {/* Rajouter le composant */}
		// </section>
	// );
// }

export default function VisitsPage() {
	const { data, isLoading, error } = useFetchGet(
		`${process.env.REACT_APP_API_URL}/visite/getAll`
	);

	return (
		<section className={styles.page}>
			<h1 className={styles.pageTitle}>Visites à venir</h1>
			<VisitsList />
			{/* <Housings isLoading={isLoading} housings={data} /> */}
			{/* <FilterForm/> */}
		</section>
	);
}
