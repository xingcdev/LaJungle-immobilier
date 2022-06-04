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
			<TransactionsList
				isLoading={isLoading}
				transactions={data}
				setHousingsData={setData}
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
