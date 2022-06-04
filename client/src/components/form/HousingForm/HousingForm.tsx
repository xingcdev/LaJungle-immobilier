import { useState, useEffect } from 'react';
import _isEqual from 'lodash/isEqual';
import { Loading } from '@components/feedback';
import { CancelButton } from '@components/buttons';
import { SubmitButton } from '@components/form';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

export interface HousingFormValues {
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
}

interface HousingFormProps {
	initialValues: HousingFormValues;
	isLoading: boolean;
	onSubmit: (formValues: any) => void;
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

	const [conditions, setConditions] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/etatHabitation/getList`)
			.then((response) => {
				if (response.ok) return response.json();
				throw response;
			})
			.then((json) => {
				setConditions(json.data);
			})
			.finally(() => setIsLoading(false));
	}, []);

	const [formValues, setFormValues] = useState({
		...props.initialValues,
	});

	function handleChange(event: any) {
		const name = event.target.name;

		if (name === 'postalCode') {
			if (event.target.value.length !== 5) {
				setFormErrors((prevErrors: any) => ({
					...prevErrors,
					[name]: 'La valeur doit être à 5 chiffres.',
				}));
			} else {
				const copiedState = { ...formErrors };
				delete copiedState[name];
				setFormErrors(copiedState);
			}
		}
		if (event.target.type === 'number') {
			if (event.target.value < 0) {
				setFormErrors((prevErrors: any) => ({
					...prevErrors,
					[name]: 'La valeur doit être positive.',
				}));
			} else {
				const copiedState = { ...formErrors };
				delete copiedState[name];
				setFormErrors(copiedState);
			}
		}

		// Specific case
		let value;

		// MUI select element
		if (event.explicitOriginalTarget?.nodeName === 'LI') {
			value = {
				label: event.explicitOriginalTarget.innerText,
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
		<Grid
			container
			spacing={3}
			component="form"
			onSubmit={(e: any) => {
				e.preventDefault();

				props.onSubmit(formValues);
			}}
		>
			<Grid item xs={12}>
				<TextField
					name="address"
					label="Adresse"
					onChange={handleChange}
					value={formValues.address}
					required
					fullWidth
				/>
			</Grid>

			<Grid item xs={4}>
				<TextField
					name="postalCode"
					label="Code postal"
					onChange={handleChange}
					value={formValues.postalCode}
					error={Boolean(formErrors.postalCode)}
					helperText={formErrors.postalCode}
					required
					fullWidth
				/>
			</Grid>
			<Grid item xs>
				<TextField
					name="city"
					label="Ville"
					onChange={handleChange}
					value={formValues.city}
					required
					fullWidth
				/>
			</Grid>

			<Grid item xs={12}>
				<TextField
					name="owner"
					label="Propriétaire"
					onChange={handleChange}
					value={formValues.owner}
					required
					fullWidth
				/>
			</Grid>

			<Grid item xs={12}>
				<TextField
					type="number"
					name="price"
					label="Prix"
					onChange={handleChange}
					value={formValues.price}
					helperText={formErrors.price}
					required
					fullWidth
				/>
			</Grid>

			<Grid item xs={4}>
				<TextField
					type="date"
					name="availableDate"
					label="Date"
					onChange={handleChange}
					value={formValues.availableDate}
					required
					fullWidth
				/>
			</Grid>
			<Grid item xs={4}>
				<TextField
					id="select-type"
					name="type"
					select
					label="Type"
					defaultValue=""
					value={formValues.type?.value}
					onChange={handleChange}
					fullWidth
					required
				>
					<MenuItem key="defaultType" value="">
						Sélectionner un type
					</MenuItem>
					{types &&
						types.map((type: any) => (
							<MenuItem key={type.value} value={type.value}>
								{type.label}
							</MenuItem>
						))}
				</TextField>
			</Grid>

			<Grid item xs={4}>
				<TextField
					id="select-condition"
					name="condition"
					select
					label="État"
					value={formValues.condition?.value}
					onChange={handleChange}
					fullWidth
					required
				>
					<MenuItem key="defaultCondition" value="">
						Sélectionner un état
					</MenuItem>
					{conditions &&
						conditions.map((condition: any) => (
							<MenuItem key={condition.value} value={condition.value}>
								{condition.label}
							</MenuItem>
						))}
				</TextField>
			</Grid>

			<Grid item xs={6}>
				<TextField
					type="number"
					name="surface"
					label="Superficie"
					placeholder="Superficie"
					onChange={handleChange}
					value={formValues.surface}
					helperText={formErrors.surface}
					required
					fullWidth
				/>
			</Grid>

			<Grid item xs={6}>
				<TextField
					type="number"
					name="rooms"
					label="Pièces"
					placeholder="Pièces"
					onChange={handleChange}
					value={formValues.rooms}
					error={formErrors.rooms}
					helperText={formErrors.rooms}
					required
					fullWidth
				/>
			</Grid>

			<Grid item xs={12}>
				<TextField
					name="description"
					label="Description"
					onChange={handleChange}
					value={formValues.description}
					multiline
					minRows={3}
					maxRows={5}
					fullWidth
				/>
			</Grid>

			<Grid
				item
				xs={12}
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center',
				}}
			>
				<CancelButton onClick={props.onClose} sx={{ mr: 3 }} />
				<SubmitButton
					loading={props.isLoading}
					disabled={
						Object.keys(formErrors).length > 0 ||
						_isEqual(props.initialValues, formValues)
							? true
							: false
					}
				/>
			</Grid>
		</Grid>
	);
}
