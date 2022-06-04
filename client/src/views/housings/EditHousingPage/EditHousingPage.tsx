import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './EditHousingPage.module.scss';
import { HousingForm } from '@components/form';
import { HousingFormValues } from '@components/form/HousingForm/HousingForm';

interface EditHousingPageProps {
	initialValues: HousingFormValues;
	setShowEditForm: (value: boolean) => void;
	setHousings: (value: any) => void;
	setOpenSnackbar: (value: boolean) => void;
}

export default function EditHousingPage(props: EditHousingPageProps) {
	const params = useParams();

	const [isFormLoading, setIsFormLoading] = useState(false);

	function handleSubmit(formValues: any) {
		setIsFormLoading(true);

		const data = {
			id: params.housingId,
			adresse: formValues.address,
			codePostal: formValues.postalCode,
			ville: formValues.city,
			description: formValues.description,
			nomProprietaire: formValues.owner,
			typeLogement: formValues.type,
			nombrePieces: formValues.rooms,
			superficie: formValues.surface,
			etatHabitation: formValues.condition,
			prixMiseEnVente: formValues.price,
			dateDisponibilite: formValues.availableDate,
		};

		fetch(`${process.env.REACT_APP_API_URL}/logement/update`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.error) throw new Error(res.error);

				setIsFormLoading(false);
				if (res.data) {
					props.setHousings((prevData: any) => ({ ...prevData, ...res.data }));
				}
			})
			.catch((error) => console.log(error))
			.finally(() => {
				props.setOpenSnackbar(true);
				props.setShowEditForm(false);
			});
	}

	function handleClose() {
		props.setShowEditForm(false);
	}

	return (
		<section className={styles.page}>
			<section className={styles.pageContent}>
				<h1 className={styles.pageTitle}>Éditer un logement</h1>
				<HousingForm
					initialValues={props.initialValues}
					onSubmit={handleSubmit}
					onClose={handleClose}
					isLoading={isFormLoading}
				/>
			</section>
		</section>
	);
}
