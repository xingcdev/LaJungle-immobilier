import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import OwnerProfile from '../OwnerProfile/OwnerProfile';
import VisitList from '../VisitList/VisitList';
import InfoChip from '../InfoChip/InfoChip';
import EditHousingPage from '../EditHousingPage/EditHousingPage';
import { EditButton } from '@components/buttons';
import { useParams } from 'react-router-dom';
import { Loading } from '@/components/feedback';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import DeleteHousingButton from '../DeleteHousingButton/DeleteHousingButton';
import EmptyPhoto from '@assets/housings/empty-housing-photo.png';

export default function HousingPage() {
	const params = useParams();
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
		<Box component="section">
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
					<Grid container>
						<Grid
							item
							xs={5}
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							}}
							sx={{
								mb: 4,
							}}
						>
							<Stack spacing={1}>
								<Typography variant="h3" style={{ fontWeight: 600 }}>
									{housings.adresse}
								</Typography>

								<Typography
									variant="h3"
									gutterBottom
									style={{ fontWeight: 600 }}
								>
									{housings.codePostal} {''}
									<Typography
										component="span"
										variant="h3"
										style={{ fontWeight: 600 }}
									>
										{housings.ville}
									</Typography>
								</Typography>
								<Typography color="text.secondary">
									Prix: {housings.prixMiseEnVente} €
								</Typography>
								<Typography color="text.secondary">
									Date disponibilité:{' '}
									{new Date(housings.dateDisponibilite).toLocaleDateString(
										'fr-FR'
									)}
								</Typography>

								<Typography color="text.secondary">
									Type: {housings.typeLogement.label}
								</Typography>

								<Typography color="text.secondary">
									État: {housings.etatHabitation.label}
								</Typography>
								<InfoChip
									surface={housings.superficie}
									rooms={housings.nombrePieces}
									garages={housings.nbGarages}
								/>
							</Stack>
							<Stack
								direction="row"
								spacing={2}
								sx={{
									mt: 3,
								}}
							>
								<EditButton onClick={() => setShowEditForm(true)} />
								<DeleteHousingButton
									address={`${housings.adresse} ${housings.codePostal} ${housings.ville}`}
									owner={housings.nomProprietaire}
								/>
							</Stack>
						</Grid>

						<Grid
							item
							xs
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							}}
							sx={{
								mb: 4,
							}}
						>
							<img
								src={EmptyPhoto}
								alt="Default housing photo"
								style={{
									maxHeight: '600px',
								}}
							/>
							<Typography
								variant="h6"
								textAlign="center"
								color="text.secondary"
							>
								Le propriétaire n'a pas mis de photos.
							</Typography>
						</Grid>

						<Grid item xs={8}>
							<Typography component="h2" variant="h4" gutterBottom>
								Description
							</Typography>

							<Typography paragraph>{housings.description}</Typography>
						</Grid>

						<Grid item>
							<OwnerProfile name={housings.nomProprietaire} />
						</Grid>

						<Grid item xs={12}>
							<Typography component="h2" variant="h4" gutterBottom>
								Visites
							</Typography>
							<VisitList visits={{}} />
						</Grid>
					</Grid>
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
		</Box>
	);
}
