import styles from './Housings.module.scss';
import HousingCard from '../HousingCard/HousingCard';
import { Loading } from '@components/feedback';

interface HousingsProps {
	housings: any;
	isLoading: boolean;
}

function Housings(props: HousingsProps) {
	if (props.isLoading) return <Loading />;

	return (
		<section className={styles.housingsList}>
			{/* {props.housings.map((housing: any) => ( */}

			<HousingCard
				housingId={1}
				photo="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				price={23000}
				address="30-32 avenue de la République"
				postalCode=" 94 800"
				city="Villejuif"
				surface={12}
				rooms={3}
				cars={2}
			/>
			<HousingCard
				housingId={1}
				photo="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				price={23000}
				address="30-32 avenue de la République"
				postalCode=" 94 800"
				city="Villejuif"
				surface={12}
				rooms={3}
				cars={2}
			/>
			<HousingCard
				housingId={1}
				photo="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				price={23000}
				address="30-32 avenue de la République"
				postalCode=" 94 800"
				city="Villejuif"
				surface={12}
				rooms={3}
				cars={2}
			/>
			{/* ))} */}
		</section>
	);
}

export default Housings;
