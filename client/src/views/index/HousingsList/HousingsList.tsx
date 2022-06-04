import styles from './HousingsList.module.scss';
import HousingCard from '../HousingCard/HousingCard';
import { Loading } from '@components/feedback';
import CreateCard from '../CreateCard/CreateCard';

interface HousingsProps {
	housings: any | null;
	isLoading: boolean;
	setHousingsData: (newHousings: any) => void;
}

function Housings(props: HousingsProps) {
	if (props.isLoading) return <Loading />;

	const emptyMessage = (
		<p className={styles.emptyMessage}>Logements non trouvés :(</p>
	);

	function addHousing(newHousing: any) {
		props.setHousingsData((existingData: any) => {
			// Overwrite only the values in existingData.
			// 'newHousing' data has so much values that we don't need in 'existingData'
			const keys = Object.keys(existingData[0]);
			let computedHousing: Record<string, any> = {};
			keys.map((key) => {
				computedHousing[key] = newHousing[key];
			});

			// todo: remove this if the response of logement/create returns 'nbGarages'
			computedHousing['nbGarages'] = 0;

			props.setHousingsData([...existingData, computedHousing]);
		});
	}

	return (
		<section className={styles.housingsList}>
			{!props.housings || !props.housings.length
				? emptyMessage
				: props.housings?.map((housing: any) => (
						<HousingCard
							key={housing.id}
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
				  ))}
			<CreateCard addHousingMethod={addHousing} />
		</section>
	);
}

export default Housings;
