import styles from './TransactionsPage.module.scss'
import TransactionsList from '../TransactionsList/TransactionsList';
import { useFetchGet } from '@hooks/fetching';
//import TransactionsList from '../TransactionsList/TransactionsList'

function TransactionsPage(){
	const{ data, setData, isLoading, error} = useFetchGet(
		`${process.env.REACT_APP_API_URL}/transaction/getAll`
	);

	if (error) return <p>{error}</p>;

	return (
		<section className={styles.page}>
			<h1 className={styles.pageTitle}>Transactions disponibles</h1>
			<li className={styles.test}>
				<span className={styles.test}><h5></h5></span>
		 		<span className={styles.test}><h5 >idTransaction</h5></span>
		 		<span className={styles.test}><h5>Prix de la vente</h5></span>
				<span className={styles.test}><h5>Pourcentage de la commission</h5></span>
				<span className={styles.test}><h5>idLogement</h5></span>
		 	</li>
			<TransactionsList
				isLoading={isLoading}
				transactions={data}
				setTransactionsData={setData}
			/>
		</section>
	);
}

export default TransactionsPage;
	

// export default function TransactionsPage() {
// 	return (
// 		<section className={styles.page}>
// 			<h1 className={styles.pageTitle}>Transactions effectuées</h1>
// 			{/* <TransactionsList /> */}
// 		</section>
// 	);
// }
