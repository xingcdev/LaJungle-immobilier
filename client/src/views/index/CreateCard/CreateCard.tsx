import { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import CreateFormDialog from '../CreateFormDialog/CreateFormDialog';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

interface CreateCardProps {
	addHousingMethod: (newHousing: any) => void;
}

export default function CreateCard(props: CreateCardProps) {
	const [openDialog, setOpenDialog] = useState(false);
	const [openSnackbar, setOpenSnackbar] = useState(false);

	function onSuccessCreate(response: any) {
		props.addHousingMethod(response.data);
		setOpenSnackbar(true);
	}

	function onCloseFormDialog() {
		setOpenDialog(false);
	}

	const snackbar = (
		<Snackbar
			open={openSnackbar}
			autoHideDuration={5000}
			onClose={() => setOpenSnackbar(false)}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
		>
			<MuiAlert
				onClose={() => setOpenSnackbar(false)}
				severity="success"
				variant="filled"
				sx={{ width: '100%' }}
			>
				Logement créé avec succès.
			</MuiAlert>
		</Snackbar>
	);

	return (
		<>
			<Card
				sx={{
					maxWidth: 310,
					height: 324,
				}}
				variant="outlined"
				onClick={() => setOpenDialog(true)}
			>
				<CardActionArea
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%',
					}}
				>
					<IoAddOutline size={60} />
				</CardActionArea>
			</Card>

			<CreateFormDialog
				initialValues={{
					address: '',
					postalCode: '',
					city: '',
					owner: '',
					price: 0,
					type: {
						label: '',
						value: '',
					},
					condition: {
						label: '',
						value: '',
					},
					surface: 10,
					rooms: 1,
					description: '',
					availableDate: new Date().toISOString().slice(0, 10),
				}}
				isOpen={openDialog}
				onClose={onCloseFormDialog}
				onSuccess={onSuccessCreate}
			/>

			{snackbar}
		</>
	);
}
