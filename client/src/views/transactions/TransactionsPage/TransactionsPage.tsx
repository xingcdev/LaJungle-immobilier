import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TransactionsList from '../TransactionsList/TransactionsList';
import { useFetchGet } from '@hooks/fetching';

function TransactionsPage() {
	const { data, isLoading, error } = useFetchGet(
		`${process.env.REACT_APP_API_URL}/transaction/getAll`
	);

	for (let i = 0; i < data.length; i++) {
		data[i].montantCommission =
			1000 + (data[i].pourcentageCommission / 100) * data[i].prixVente;
	}
	if (error) return <p>{error}</p>;

	return (
		<Box component="section">
			<Typography component="h1" variant="h4" gutterBottom>
				Transactions disponibles
			</Typography>
			<TransactionsList isLoading={isLoading} transactions={data} />
		</Box>
	);
}

export default TransactionsPage;
