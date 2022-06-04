import styles from './TransactionsList.module.scss';
import Stack from '@mui/material/Stack';
import { Loading } from '@/components/feedback';
import TransactionCard from '../TransactionsCard/TransactionsCard';
/*import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableHeader,
	TableData,
} from '@/components/display';*/

interface TransactionsProps {
	transactions: any | null;
	isLoading: boolean;
	setTransactionsData: (newTransactions: any) => void;
}


function Transactions(props: TransactionsProps) {
	if (props.isLoading) return <Loading />;
	
	const emptyMessage = (
		<p className={styles.emptyMessage}>Transactions non trouvées :(</p>
	);

	function addTransactions(newTransactions: any) {
		props.setTransactionsData((existingData: any) => {
			// Overwrite only the values in existingData.
			// 'newHousing' data has so much values that we don't need in 'existingData'
			if (!existingData) return props.setTransactionsData([newTransactions]);
			const keys = Object.keys(existingData[0]);
			let computedTransaction: Record<string, any> = {};
			keys.map((key) => {
				computedTransaction[key] = newTransactions[key];
			});

			// todo: remove this if the response of logement/create returns 'nbGarages'
			computedTransaction['nbGarages'] = 0;

			props.setTransactionsData([...existingData, computedTransaction]);
		});
	}

	return (
		<Stack spacing={2}>
			{!props.transactions || !props.transactions.length
				? emptyMessage
				:props.transactions?.map((transaction: any) => (
					<Stack spacing={6}>
						<TransactionCard
							key={transaction.id}
							logementId={transaction.logementId}
							clientId={transaction.clientId}
							prixVent={transaction.prixVent}
							pourcentageCommission={transaction.pourcentageCommission}
							// clientId: number;
							// logementId: number;
							// prixVent: number;
							// pourcentageCommission: number;
						/>
						{/* <TransactionCard */}
					</Stack>
				)
				)
			}
		</Stack>
	);

	/*return (
		<TableRow>
			<TableData>1232132</TableData>
			<TableData>1232132</TableData>
			<TableData>1232132</TableData>
			<TableData>1232132</TableData>
		</TableRow>
	);*/
}
export default Transactions;

/*export default function TransactionsList() {
	const rows = [
		<TransactionRow />,
		<TransactionRow />,
		<TransactionRow />,
		<TransactionRow />,
	];

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableHeader>Id client</TableHeader>
					<TableHeader>Logement</TableHeader>
					<TableHeader>Prix vente (€)</TableHeader>
					<TableHeader>Commission (%)</TableHeader>
				</TableRow>
			</TableHead>
			<TableBody>{rows}</TableBody>
		</Table>
	);
}*/

