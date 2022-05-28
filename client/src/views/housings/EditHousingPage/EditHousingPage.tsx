import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './EditHousingPage.module.scss';
import { Input } from '@components/form';

interface EditHousingPageProps {
	initialValues?: {
		address?: string;
		postalCode?: string;
		city?: string;
		owner?: string;
		price?: number;
		type?: string;
		condition?: string;
		surface?: number;
		rooms?: number;
		garage?: number;
		description?: string;
		visits?: any;
		garages?: any;
	};
}

export default function EditHousingPage(props: EditHousingPageProps) {
	const params = useParams();

	const [formValues, setFormValues] = useState({
		...props.initialValues,
		// address: '',
		// postalCode: '',
		// city: '',
		// price: 0,
		// type: '',
		// condition: '',
		// surface: 0,
		// rooms: 0,
		// garages: 0,
		// description: '',
	});

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const name = event.target.name;
		// Specific case
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;

		// @ts-ignore
		setFormValues({
			[name]: value,
		});
	}

	function handleSubmit(event: any) {
		event.preventDefault();

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
			// dateDisponibilite: formValues.data
		};

		fetch(`${process.env.REACT_APP_API_URL}/logement/update`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	}

	return (
		<section className={styles.page}>
			<h1 className={styles.pageTitle}>Édition de logement</h1>

			<form className="grid" onSubmit={handleSubmit}>
				<Input
					name="address"
					label="Adresse"
					className="col-full"
					onChange={handleChange}
					value={formValues.address}
				/>
				<Input
					name="postalCode"
					label="Code postal"
					className="col-6"
					onChange={handleChange}
					value={formValues.postalCode}
				/>
				<Input
					name="city"
					label="Ville"
					className="col-6"
					onChange={handleChange}
					value={formValues.city}
				/>
				<Input
					name="owner"
					label="Propriétaire"
					className="col-full"
					onChange={handleChange}
					value={formValues.owner}
				/>
				<Input
					name="price"
					label="Prix"
					className="col-2"
					onChange={handleChange}
					value={formValues.price}
				/>
				<Input
					name="type"
					label="Type"
					className="col-2"
					onChange={handleChange}
					value={formValues.type}
				/>
				<Input
					name="condition"
					label="État"
					className="col-2"
					onChange={handleChange}
					value={formValues.condition}
				/>
				<Input
					name="surface"
					placeholder="Superficie"
					className="col-2"
					onChange={handleChange}
					value={formValues.surface}
				/>
				<Input
					name="rooms"
					placeholder="Pièces"
					className="col-2"
					onChange={handleChange}
					value={formValues.rooms}
				/>
				<Input
					name="garage"
					placeholder="Garage(s)"
					className="col-2"
					onChange={handleChange}
					value={formValues.garages}
				/>
				<Input
					name="description"
					label="Description"
					className="col-2"
					onChange={handleChange}
					value={formValues.description}
				/>

				<button type="submit">Sauvegarder</button>
			</form>
		</section>
	);
}
