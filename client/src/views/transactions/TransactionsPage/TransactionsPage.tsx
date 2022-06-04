import styles from './TransactionsPage.module.scss'
//import TransactionsList from '../TransactionsList/TransactionsList'

export default function TransactionsPage() {
	return (
		<section className={styles.page}>
			<h1 className={styles.pageTitle}>Transactions effectuées</h1>
			{/* <TransactionsList /> */}
		</section>
	);
}
