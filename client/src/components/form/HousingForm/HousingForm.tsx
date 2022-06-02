import { useState, useEffect } from 'react';
import _isEqual from 'lodash/isEqual';
import styles from './HousingForm.module.scss';
import { Input } from '@components/form';
import { Loading } from '@components/feedback';
import { CancelButton } from '@components/buttons';
import { SubmitButton } from '@components/form';

interface HousingFormProps {
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
	onSubmit: (event: any, formValues: any) => void;
	setShowEditForm?: (value: boolean) => void;
	onClose: () => void;
}

export default function HousingForm(props: HousingFormProps) {
	const [isLoading, setIsLoading] = useState(true);
	const [formErrors, setFormErrors] = useState<any>({});

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

	const [formValues, setFormValues] = useState({
		...props.initialValues,
	});

	function handleChange(event: any) {
		const name = event.target.name;

		setFormErrors({});

		if (name === 'postalCode') {
			if (event.target.value.length > 5) {
				setFormErrors((prevErrors: any) => ({
					...prevErrors,
					[name]: 'La valeur doit être < à 5 chiffres.',
				}));
			}
		}
		if (event.target.type === 'number') {
			if (event.target.value < 0) {
				setFormErrors((prevErrors: any) => ({
					...prevErrors,
					[name]: 'La valeur doit être positive.',
				}));
			}
		}

		// Specific case
		let value;

		if (event.target.tagName === 'SELECT') {
			value = {
				label: event.target.options[event.target.selectedIndex].label,
				value: event.target.value,
			};
		} else if (event.target.type === 'checkbox') {
			value = event.target.checked;
		} else {
			value = event.target.value;
		}

		setFormValues({
			...formValues,
			[name]: value,
		});
	}

	if (isLoading) return <Loading />;

	return (
		<form
			className={styles.form}
			onSubmit={(event) => {
				event.preventDefault();
				props.onSubmit(event, formValues);
			}}
		>
			<Input
				name="address"
				label="Adresse"
				onChange={handleChange}
				value={formValues.address}
				required
			/>
			<Input
				className={styles.postalCode}
				name="postalCode"
				label="Code postal"
				onChange={handleChange}
				value={formValues.postalCode}
				error={formErrors.postalCode}
				required
			/>
			<Input
				className={styles.city}
				name="city"
				label="Ville"
				onChange={handleChange}
				value={formValues.city}
				required
			/>
			<Input
				name="owner"
				label="Propriétaire"
				onChange={handleChange}
				value={formValues.owner}
				required
			/>
			<Input
				className={styles.price}
				type="number"
				name="price"
				label="Prix"
				onChange={handleChange}
				value={formValues.price}
				error={formErrors.price}
				required
			/>

			<div className={styles.type}>
				<label htmlFor="type">Type</label>
				<select
					id="type"
					name="type"
					value={formValues?.type?.value}
					onChange={handleChange}
				>
					{types &&
						types.map((type: any, index: number) => (
							<option key={index} value={type.value}>
								{type.label}
							</option>
						))}
				</select>
			</div>

			<div className={styles.condition}>
				<label htmlFor="condition">État</label>

				<select
					id="condition"
					name="condition"
					value={formValues?.condition?.value}
					onChange={handleChange}
				>
					{etats &&
						etats.map((etat: any, index: number) => (
							<option key={index} value={etat.value}>
								{etat.label}
							</option>
						))}
				</select>
			</div>
			<Input
				type="date"
				name="availableDate"
				label="Date"
				onChange={handleChange}
				value={formValues.availableDate}
				required
			/>
			<Input
				className={styles.surface}
				type="number"
				name="surface"
				label="Superficie"
				placeholder="Superficie"
				onChange={handleChange}
				value={formValues.surface}
				error={formErrors.surface}
				required
			/>
			<Input
				className={styles.rooms}
				type="number"
				name="rooms"
				label="Pièces"
				placeholder="Pièces"
				onChange={handleChange}
				value={formValues.rooms}
				error={formErrors.rooms}
				required
			/>
			<textarea
				name="description"
				onChange={handleChange}
				value={formValues.description}
			/>
			<div className="action-area">
				<CancelButton
					onClick={props.onClose}
					style={{ margin: '0 1rem 0 0' }}
				/>
				<SubmitButton
					disabled={
						Object.keys(formErrors).length > 0 ||
						_isEqual(props.initialValues, formValues)
							? true
							: false
					}
				/>
			</div>
		</form>
	);
}
