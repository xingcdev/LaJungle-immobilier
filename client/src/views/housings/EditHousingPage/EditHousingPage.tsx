import { useState } from 'react';
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
		description?: string;
		visits?: any;
		availableDate?: any;
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

		setFormValues({
			...formValues,
			[name]: value,
		});

		console.log(formValues);
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
			typeLogement: {
				idType: formValues.type,
			},
			nombrePieces: formValues.rooms,
			superficie: formValues.surface,
			etatHabitation: {
				idEtat: formValues.condition,
			},
			prixMiseEnVente: formValues.price,
			dateDisponibilite: formValues.availableDate,
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
					<select name="type" value={formValues.type} onChange={handleChange}>
						<option value="appartement">Appartement</option>
						<option value="maison">Maison</option>
					</select>
				</label>
				<label>
					État
					<select
						name="condition"
						value={formValues.condition}
						onChange={handleChange}
					>
						<option value="neuf">Neuf</option>
						<option value="tres_bon">Très bon</option>
						<option value="bon">Bon</option>
						<option value="mauvais">Mauvais</option>
					</select>
				</label>
				<Input
					type="date"
					name="availableDate"
					className="col-2"
					onChange={handleChange}
					value={formValues.availableDate}
				/>
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
