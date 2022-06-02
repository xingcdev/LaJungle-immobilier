import { useParams } from 'react-router-dom';
import styles from './EditHousingPage.module.scss';
import { HousingForm } from '@components/form';

interface EditHousingPageProps {
	initialValues?: {
		address: string;
		postalCode: string;
		city: string;
		owner: string;
		price: number;
		type: {
			label: string;
			value: string;
		};
		condition: {
			label: string;
			value: string;
		};
		surface: number;
		rooms: number;
		description: string;
		visits?: any;
		availableDate: any;
	};
	setShowEditForm: (value: boolean) => void;
	setHousings: (value: any) => void;
}

export default function EditHousingPage(props: EditHousingPageProps) {
	const params = useParams();

	function handleSubmit(event: any, formValues: any) {
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

				if (res.data)
					props.setHousings((prevData: any) => ({ ...prevData, ...res.data }));

				props.setShowEditForm(false);
			})
			.catch((error) => console.log(error));
	}

	function handleClose() {
		props.setShowEditForm(false);
	}

	return (
		<section className={styles.page}>
			<h1 className={styles.pageTitle}>Édition de logement</h1>
			<HousingForm
				initialValues={props.initialValues}
				onSubmit={handleSubmit}
				onClose={handleClose}
			/>
		</section>
	);
}
