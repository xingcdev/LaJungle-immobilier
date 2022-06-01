import { useState, useEffect } from 'react';
import styles from './HousingForm.module.scss';
import { Input } from '@components/form';
import { Loading } from '@/components/feedback';

interface HousingFormProps {
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
	onSubmit: (event: any, formValues: any) => void;
	setShowEditForm?: (value: boolean) => void;
}

export default function HousingForm(props: HousingFormProps) {
	const [isLoading, setIsLoading] = useState(true);

	const [types, setTypes] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/typeLogement/getList`)
			.then((response) => {
				if (response.ok) return response.json();
				throw response;
			})
			.then((json) => {
				setTypes(json.data);
			});
	}, []);

	const [etats, setEtats] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/etatHabitation/getList`)
			.then((response) => {
				if (response.ok) return response.json();
				throw response;
			})
			.then((json) => {
				setEtats(json.data);
			})
			.finally(() => setIsLoading(false));
	}, []);

	console.log(types);
	console.log(etats);

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
	}

	if (isLoading) return <Loading />;

	return (
		<form
			className="grid"
			onSubmit={(event) => {
				props.onSubmit(event, formValues);
			}}
		>
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
					{types &&
						types.map((type: any) => (
							<option value={type.value}>{type.label}</option>
						))}
				</select>
			</label>
			<label>
				État
				<select
					name="condition"
					value={formValues.condition}
					onChange={handleChange}
				>
					{etats &&
						etats.map((etat: any) => (
							<option value={etat.value}>{etat.label}</option>
						))}
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
	);
}
