import styles from './VisitsPage.module.scss'
import VisitsList from '../VisitsList/VisitsList';
import { useFetchGet } from '@hooks/fetching';

function VisitsPage(){
	const{ data, setData, isLoading, error} = useFetchGet(
		`${process.env.REACT_APP_API_URL}/visite/getAll`
	);

	if (error) return <p>{error}</p>;

	return (
		<section className={styles.page}>
			<h1 className={styles.pageTitle}>Visites disponibles</h1>
			<li className={styles.test}>
				<span className={styles.test}><h5></h5></span>
		 		<span className={styles.test}><h5 >idVisites</h5></span>
		 		<span className={styles.test}><h5>Date</h5></span>
				<span className={styles.test}><h5>Adresse</h5></span>
				<span className={styles.test}><h5>Client</h5></span>
		 	</li>
			<VisitsList
				isLoading={isLoading}
				visits={data}
				setVisitsData={setData}
			/>
		</section>
	);
}

export default VisitsPage;
