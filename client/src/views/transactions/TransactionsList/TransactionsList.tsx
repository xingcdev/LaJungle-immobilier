import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableHeader,
	TableData,
} from '@/components/display';

function TransactionRow() {
	return (
		<TableRow>
			<TableData>1232132</TableData>
			<TableData>1232132</TableData>
			<TableData>1232132</TableData>
			<TableData>1232132</TableData>
		</TableRow>
	);
}

export default function TransactionsList() {
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
}
