import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableHeader,
	TableData,
} from '@/components/display';

function VisiteRow() {
	return (
		<TableRow>
			<TableData>1232132</TableData>
			<TableData>1232132</TableData>
			<TableData>1232132</TableData>
			<TableData>1232132</TableData>
		</TableRow>
	);
}

export default function VisitsList() {
	const rows = [
		<VisiteRow />,
		<VisiteRow />,
		<VisiteRow />,
		<VisiteRow />,
	];

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableHeader>IdVisite</TableHeader>
					<TableHeader>DateVisite</TableHeader>
					<TableHeader>NomClient</TableHeader>
					<TableHeader>Adresse</TableHeader>
				</TableRow>
			</TableHead>
			<TableBody>{rows}</TableBody>
		</Table>
	);
}
