import styles from './TransactionsList.module.scss';
import Stack from '@mui/material/Stack';
import { Loading } from '@/components/feedback';
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
	setHousingsData: (newHousings: any) => void;
}


function Transactions(props: TransactionsProps) {
	if (props.isLoading) return <Loading />;
	
	const emptyMessage = (
		<p className={styles.emptyMessage}>Transactions non trouvées :(</p>
	);

	return (
		<Stack spacing={2}>
			{!props.transactions || !props.transactions.length
				? emptyMessage
				:props.transactions?.map((transaction: any) => (
					<Stack>
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
