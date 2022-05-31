import { useState } from 'react';

import styles from './HousingPage.module.scss';
import OwnerProfile from '../OwnerProfile/OwnerProfile';
import VisitList from '../VisitList/VisitList';
import InfoChip from '../InfoChip/InfoChip';
import EditHousingPage from '../EditHousingPage/EditHousingPage';
import { useFetchGet } from '@hooks/fetching';
import { useParams } from 'react-router-dom';

export default function HousingPage() {
	const params = useParams();
	const housingPhoto =
		'https://images.unsplash.com/photo-1460317442991-0ec209397118?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170';

	const [showEditForm, setShowEditForm] = useState(false);

	const { data, isLoading, error } = useFetchGet(
		`${process.env.REACT_APP_API_URL}/logement/get`,
		{ id: params.housingId },
		[showEditForm]
	);

	console.log('data, ', data);

	return (
		<section className={styles.page}>
			{showEditForm ? (
				<EditHousingPage
					initialValues={{
						address: data.adresse,
						postalCode: data.codePostal,
						city: data.ville,
						owner: data.nomProprietaire,
						price: data.prixMiseEnVente,
						type: data.typeLogement,
						condition: data.etatHabitation,
						surface: data.superficie,
						rooms: data.nombrePieces,
						garages: data.garages,
						description: data.description,
					}}
					setShowEditForm={setShowEditForm}
				/>
			) : (
				<>
					<section className={styles.hero}>
						<img src={housingPhoto} alt="housing" />
					</section>
					<section className={styles.content}>
						<section className={styles.housingContent}>
							<section className={styles.info}>
								<p className={styles.address}>{data.adresse}</p>
								<p className={styles.postalCode}>
									{data.codePostal}
									<span className={styles.city}> {data.ville}</span>
								</p>
								<p className={styles.price}>
									Prix :{' '}
									<span className={styles.priceValue}>
										{data.prixMiseEnVente}
									</span>
									<span className={styles.priceDevise}> €</span>
								</p>
								<p className={styles.type}>
									Type:{' '}
									<span className={styles.typeValue}>{data.typeLogement}</span>
								</p>
								<p className={styles.condition}>
									État :{' '}
									<span className={styles.conditionValue}>
										{data.etatHabitation}
									</span>
								</p>
								<InfoChip
									surface={data.superficie}
									rooms={data.nombrePieces}
									garages={data.garages}
								/>
							</section>
							<section className={styles.description}>
								<h2 className={styles.descriptionTitle}>Description</h2>
								<p className={styles.descriptionContent}>{data.description}</p>
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
