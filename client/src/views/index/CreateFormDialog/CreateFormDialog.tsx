import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { HousingForm } from '@components/form';

interface CreateFormDialogProps {
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
	isOpen: boolean;
	handleSubmit: () => void;
	handleClose: () => void;
}

export default function CreateFormDialog(props: CreateFormDialogProps) {
	return (
		<Dialog open={props.isOpen}>
			<DialogTitle>Créer un logement</DialogTitle>
			<DialogContent>
				<HousingForm
					initialValues={props.initialValues}
					onSubmit={props.handleSubmit}
					onClose={props.handleClose}
					isLoading={false}
				/>
			</DialogContent>
			<DialogActions>
				{/* <Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleClose}>Subscribe</Button> */}
			</DialogActions>
		</Dialog>
	);
}
