import { useState, useEffect } from 'react';
import styles from './HousingPage.module.scss';
import OwnerProfile from '../OwnerProfile/OwnerProfile';
import VisitList from '../VisitList/VisitList';
import InfoChip from '../InfoChip/InfoChip';
import EditHousingPage from '../EditHousingPage/EditHousingPage';
import { EditButton } from '@components/buttons';
import { useParams } from 'react-router-dom';
import { Loading } from '@/components/feedback';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function HousingPage() {
	const params = useParams();
	const housingPhoto =
		'https://images.unsplash.com/photo-1460317442991-0ec209397118?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170';

	const [showEditForm, setShowEditForm] = useState(false);

	const [housings, setHousings] = useState<any>({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	const [openSnackbar, setOpenSnackbar] = useState(false);

	useEffect(() => {
		fetch(
			// Add GET params to the URL
			// see: https://stackoverflow.com/a/58437909
			`${process.env.REACT_APP_API_URL}/logement/get?${new URLSearchParams({
				id: params.housingId as string,
			})}`
		)
			.then((response) => {
				if (response.ok) return response.json();
				throw response;
			})
			.then((json) => {
				setHousings(json.data);
			})
			.catch((error) => setError(error))
			.finally(() => setIsLoading(false));
	}, [params.housingId]);

	if (isLoading) return <Loading />;

	if (error) return <p>{error}</p>;

	return (
		<section className={styles.page}>
			{showEditForm ? (
				<EditHousingPage
					initialValues={{
						address: housings.adresse,
						postalCode: housings.codePostal,
						city: housings.ville,
						owner: housings.nomProprietaire,
						price: housings.prixMiseEnVente,
						type: housings.typeLogement,
						condition: housings.etatHabitation,
						surface: housings.superficie,
						rooms: housings.nombrePieces,
						description: housings.description,
						// The server send use 'YYYY-MM-DDT22:00:00.000Z' format
						availableDate: new Date(housings.dateDisponibilite)
							.toISOString()
							.slice(0, 10),
					}}
					setShowEditForm={setShowEditForm}
					setHousings={setHousings}
					setOpenSnackbar={setOpenSnackbar}
				/>
			) : (
				<>
					<section className={styles.hero}>
						<img src={housingPhoto} alt="housing" />
					</section>
					<section className={styles.content}>
						<section className={styles.housingContent}>
							<section className={styles.info}>
								<p className={styles.address}>{housings.adresse}</p>
								<p className={styles.postalCode}>
									{housings.codePostal}
									<span className={styles.city}> {housings.ville}</span>
								</p>
								<p className={styles.price}>
									Prix :{' '}
									<span className={styles.priceValue}>
										{housings.prixMiseEnVente}
									</span>
									<span className={styles.priceDevise}> €</span>
								</p>
								<p className={styles.availableDate}>
									Date disponibilité :{' '}
									<span className={styles.availableDateValue}>
										{new Date(housings.dateDisponibilite).toLocaleDateString(
											'fr-FR'
										)}
									</span>
								</p>
								<p className={styles.type}>
									Type:{' '}
									<span className={styles.typeValue}>
										{housings.typeLogement.label}
									</span>
								</p>
								<p className={styles.condition}>
									État :{' '}
									<span className={styles.conditionValue}>
										{housings.etatHabitation.label}
									</span>
								</p>

								<InfoChip
									surface={housings.superficie}
									rooms={housings.nombrePieces}
									garages={housings.nbGarages}
								/>
							</section>
							<section className={styles.description}>
								<h2 className={styles.descriptionTitle}>Description</h2>
								<p className={styles.descriptionContent}>
									{housings.description}
								</p>
							</section>
							<VisitList visits={{}} />
						</section>
						<section>
							<EditButton onClick={() => setShowEditForm(true)} />
							<OwnerProfile name={housings.nomProprietaire} />
						</section>
					</section>
					<Snackbar
						open={openSnackbar}
						autoHideDuration={5000}
						onClose={() => setOpenSnackbar(false)}
						anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					>
						<MuiAlert
							onClose={() => setOpenSnackbar(false)}
							severity="success"
							variant="filled"
							sx={{ width: '100%' }}
						>
							Logement modifié avec succès.
						</MuiAlert>
					</Snackbar>
				</>
			)}
		</section>
	);
}
