import styles from './Housings.module.scss';
import HousingCard from '../HousingCard/HousingCard';
import { Loading } from '@components/feedback';
import CreateCard from '../CreateCard/CreateCard';

interface HousingsProps {
	housings: any | null;
	isLoading: boolean;
}

function Housings(props: HousingsProps) {
	if (props.isLoading) return <Loading />;

	const emptyMessage = (
		<p className={styles.emptyMessage}>Logements non trouvés :(</p>
	);

	return (
		<section className={styles.housingsList}>
			{props.housings
				? props.housings.map((housing: any) => (
						<HousingCard
							housingId={housing.id}
							photo={housing.photo}
							price={housing.prixMiseEnVente}
							address={housing.adresse}
							postalCode={housing.codePostal}
							city={housing.ville}
							surface={housing.superficie}
							rooms={housing.nombrePieces}
							garages={housing.nbGarages}
						/>
				  ))
				: emptyMessage}
			<CreateCard />
		</section>
	);
}

export default Housings;
