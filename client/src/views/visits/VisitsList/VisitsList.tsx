import styles from './VisitsList.module.scss';
import Stack from '@mui/material/Stack';
import { Loading } from '@/components/feedback';
import VisitsCard from '../VisitsCard/VisitsCard';
/*import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableHeader,
	TableData,
} from '@/components/display';*/

interface VisitsProps {
	visits: any | null;
	isLoading: boolean;
	setVisitsData: (newVisits: any) => void;
}


function Visits(props: VisitsProps) {
	if (props.isLoading) return <Loading />;
	
	const emptyMessage = (
		<p className={styles.emptyMessage}>Visites non trouvées :(</p>
	);

	function addVisits(newVisits: any) {
		props.setVisitsData((existingData: any) => {
			// Overwrite only the values in existingData.
			// 'newHousing' data has so much values that we don't need in 'existingData'
			if (!existingData) return props.setVisitsData([newVisits]);
			const keys = Object.keys(existingData[0]);
			let computedVisit: Record<string, any> = {};
			keys.map((key) => {
				computedVisit[key] = newVisits[key];
			});

			// todo: remove this if the response of logement/create returns 'nbGarages'
			//computedTransaction['nbGarages'] = 0;

			props.setVisitsData([...existingData, computedVisit]);
		});
	}

	return (
		<Stack spacing={2}>
			{!props.visits || !props.visits.length
				? emptyMessage
				:props.visits?.map((visit: any) => (
					<Stack spacing={6}>
						<VisitsCard

							idVisite={visit.idVisite}
							dateHeureVisite={visit.dateHeureVisite}
							adresse={visit.adresse}
							nomClient={visit.nomClient}
						/>
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
export default Visits;

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

