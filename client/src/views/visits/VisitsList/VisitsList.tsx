import styles from './VisitsList.module.scss';
import Stack from '@mui/material/Stack';
import { Loading } from '@/components/feedback';
import VisitsCard from '../VisitsCard/VisitsCard';

interface VisitsProps {
	visits: any | null;
	isLoading: boolean;
}

function Visits(props: VisitsProps) {
	if (props.isLoading) return <Loading />;

	const emptyMessage = (
		<p className={styles.emptyMessage}>Visites non trouvées :(</p>
	);

	return (
		<Stack spacing={2}>
			{/* <Stack spacing={3}> */}
			{!props.visits || !props.visits.length
				? emptyMessage
				: props.visits?.map((visit: any) => (
						<VisitsCard
							key={visit.idVisite}
							idVisite={visit.idVisite}
							dateHeureVisite={visit.dateHeureVisite}
							adresse={visit.adresse}
							nomClient={visit.nomClient}
						/>
				  ))}
			{/* </Stack> */}
		</Stack>
	);
}
export default Visits;
