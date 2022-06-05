import styles from './TransactionsList.module.scss';
import { Loading } from '@/components/feedback';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface TransactionsProps {
	transactions: any | null;
	isLoading: boolean;
}

function Transactions(props: TransactionsProps) {
	if (props.isLoading) return <Loading />;

	const emptyMessage = (
		<p className={styles.emptyMessage}>Transactions non trouvées :(</p>
	);

	if (!props.transactions || !props.transactions.length) return emptyMessage;

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="center">idTransaction</TableCell>
						<TableCell align="center">Prix de la vente</TableCell>
						<TableCell align="center">Commission (%)</TableCell>
						<TableCell align="center">Commission (€)</TableCell>
						<TableCell align="center">Logement</TableCell>
						<TableCell align="center">Client</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.transactions.map((transaction: any) => (
						<TableRow
							key={transaction.idTransaction}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row" align="center">
								{transaction.idTransaction}
							</TableCell>
							<TableCell align="center">{transaction.prixVente}</TableCell>
							<TableCell align="center">
								{transaction.pourcentageCommission}
							</TableCell>
							<TableCell align="center">
								{transaction.montantCommission}
							</TableCell>
							<TableCell align="center">{transaction.adresse}</TableCell>
							<TableCell align="center">{transaction.nomClient}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
export default Transactions;
