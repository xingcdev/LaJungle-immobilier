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

	setShowEditForm: (value: boolean) => void;
}

export default function (props: EditHousingPageProps) {
	const params = useParams();

	const [isOpen, setIsOpen] = useState(false);

	const [formValues, setFormValues] = useState({
		...props.initialValues,
	});

	function handleChange(event: any) {
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

		console.log('form values', formValues);
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

		console.log('formdata in submitting', data);

		fetch(`${process.env.REACT_APP_API_URL}/logement/update`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then(() => props.setShowEditForm(false));
	}

	if (isOpen) return null;

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
					type="number"
					name="price"
					label="Prix"
					className="col-2"
					onChange={handleChange}
					value={formValues.price}
				/>

				<label>
					Type
					<select value={formValues.type} onChange={handleChange}>
						<option value="neuf">Appartement</option>
						<option value="tresBon">maison</option>
					</select>
				</label>
				<label>
					État
					<select value={formValues.condition} onChange={handleChange}>
						<option value="neuf">Neuf</option>
						<option value="tres_bon">Très bon</option>
						<option value="bon">Bon</option>
						<option value="mauvais">Mauvais</option>
					</select>
				</label>
				<Input
					type="number"
					name="surface"
					placeholder="Superficie"
					className="col-2"
					onChange={handleChange}
					value={formValues.surface}
				/>
				<Input
					type="number"
					name="rooms"
					placeholder="Pièces"
					className="col-2"
					onChange={handleChange}
					value={formValues.rooms}
				/>
				<Input
					type="number"
					name="garage"
					placeholder="Garage(s)"
					className="col-2"
					onChange={handleChange}
					value={formValues.garages}
				/>
				<textarea
					name="description"
					className="col-full"
					onChange={handleChange}
					value={formValues.description}
				/>

				<button type="submit">Sauvegarder</button>
			</form>
		</section>
	);
}
