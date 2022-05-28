import { ChangeEvent, useState } from 'react';
import styles from './EditHousingPage.module.scss';
import { Input } from '@components/form';

interface EditHousingPageProps {
	address?: '';
	postalCode?: '';
	city?: string;
	price?: 0;
	type?: string;
	condition?: string;
	surface?: number;
	rooms?: number;
	garage?: number;
	description?: string;
	visits?: any;
	garages?: any;
}

export default function EditHousingPage(props: EditHousingPageProps) {
	const [formValues, setFormValues] = useState<EditHousingPageProps>({
		address: '',
		postalCode: '',
		city: '',
		price: 0,
		type: '',
		condition: '',
		surface: 0,
		rooms: 0,
		garage: 0,
		description: '',
	});

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const name = event.target.name;
		console.log(name);
		// Specific case
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;

		setFormValues({
			[name]: value,
		});
	}

	function handleSubmit(event: any) {
		event.preventDefault();

		// fetch();
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
				/>
				<Input
					name="price"
					label="Prix"
					className="col-2"
					onChange={handleChange}
				/>
				<Input
					name="type"
					label="Type"
					className="col-2"
					onChange={handleChange}
				/>
				<Input
					name="condition"
					label="État"
					className="col-2"
					onChange={handleChange}
				/>
				<Input
					name="surface"
					placeholder="Superficie"
					className="col-2"
					onChange={handleChange}
				/>
				<Input
					name="rooms"
					placeholder="Pièces"
					className="col-2"
					onChange={handleChange}
				/>
				<Input
					name="garage"
					placeholder="Garage(s)"
					className="col-2"
					onChange={handleChange}
				/>
				<Input
					name="description"
					label="Description"
					className="col-2"
					onChange={handleChange}
				/>

				<button type="submit">Sauvegarder</button>
			</form>
		</section>
	);
}
