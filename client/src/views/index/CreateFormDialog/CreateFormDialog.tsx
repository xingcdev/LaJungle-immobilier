import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { HousingForm } from '@components/form';
import { HousingFormValues } from '@components/form/HousingForm/HousingForm';

interface CreateFormDialogProps {
	initialValues: HousingFormValues;
	isOpen: boolean;
	onSuccess: (response: any) => void;
	onClose: () => void;
}

export default function CreateFormDialog(props: CreateFormDialogProps) {
	const [isFormLoading, setIsFormLoading] = useState(false);

	function handleSubmit(formValues: HousingFormValues) {
		const data = {
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

		fetch(`${process.env.REACT_APP_API_URL}/logement/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((json) => {
				setIsFormLoading(true);
				if (json.error) throw new Error(json.error);

				if (json.data) {
					props.onSuccess(json);
				}
			})
			.catch((error) => console.log(error))
			.finally(() => {
				setIsFormLoading(false);
				props.onClose();
			});
	}

	return (
		<Dialog open={props.isOpen}>
			<DialogTitle>Créer un logement</DialogTitle>
			<DialogContent style={{ paddingTop: '1rem' }}>
				<HousingForm
					initialValues={props.initialValues}
					onSubmit={handleSubmit}
					onClose={props.onClose}
					isLoading={isFormLoading}
				/>
			</DialogContent>
		</Dialog>
	);
}
