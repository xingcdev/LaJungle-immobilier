import styles from './HousingPage.module.scss';
import OwnerProfile from '../OwnerProfile/OwnerProfile';
import VisitList from '../VisitList/VisitList';
import InfoChip from '../InfoChip/InfoChip';
import EditHousingPage from '../EditHousingPage/EditHousingPage';
import { useState } from 'react';

export default function HousingPage() {
	const housingPhoto =
		'https://images.unsplash.com/photo-1460317442991-0ec209397118?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170';

	const housings = {};

	const [showEditForm, setShowEditForm] = useState(false);

	return (
		<section className={styles.page}>
			{showEditForm ? (
				<EditHousingPage />
			) : (
				<>
					<section className={styles.hero}>
						<img src={housingPhoto} alt="housing" />
					</section>
					<section className={styles.content}>
						<section className={styles.housingContent}>
							<section className={styles.info}>
								<p className={styles.address}>30-32 avenue de la République</p>
								<p className={styles.postalCode}>
									94 800 <span className={styles.city}>Villejuif</span>
								</p>
								<p className={styles.price}>
									Prix : <span className={styles.priceValue}>10 000</span>
									<span className={styles.priceDevise}> €</span>
								</p>
								{}
								<p className={styles.type}>
									Type: <span className={styles.typeValue}>appartement</span>
								</p>
								<p className={styles.condition}>
									État : <span className={styles.conditionValue}>très bon</span>
								</p>
								<InfoChip surface={100} rooms={1} garage={1} />
							</section>
							<section className={styles.description}>
								<h2 className={styles.descriptionTitle}>Description</h2>
								<p className={styles.descriptionContent}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Inventore, modi voluptatum eaque temporibus et laudantium
									perspiciatis velit, obcaecati accusantium aut officia nihil
									eos, dolore explicabo ea. Repellendus placeat tempore ex!
								</p>
							</section>
							<VisitList visits={{}} />
						</section>
						<section>
							<button onClick={() => setShowEditForm(true)}>Editer</button>
							<OwnerProfile />
						</section>
					</section>
				</>
			)}
		</section>
	);
}
