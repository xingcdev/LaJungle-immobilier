import { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import CreateFormDialog from '../CreateFormDialog/CreateFormDialog';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

interface CreateCardProps {}

export default function CreateCard(props: CreateCardProps) {
	const [openDialog, setOpenDialog] = useState(false);

	function handleClick() {
		setOpenDialog(true);
	}

	function handleSubmit() {
		// setOpenDialog(true);
	}

	function handleClose() {
		setOpenDialog(false);
	}

	return (
		<>
			<Card
				sx={{
					maxWidth: 310,
					height: 324,
				}}
				variant="outlined"
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
				isOpen={openDialog}
				handleSubmit={handleSubmit}
				handleClose={handleClose}
			/>
		</>
	);
}
