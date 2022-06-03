import { useState } from 'react';
import { Card } from '@components/container';
import { IoAddOutline } from 'react-icons/io5';
import CreateFormDialog from '../CreateFormDialog/CreateFormDialog';

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
				hasHoverEffect
				style={{
					padding: 0,
					width: 200,
					height: 200,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					cursor: 'pointer',
				}}
				onClick={handleClick}
			>
				<IoAddOutline size={30} />
			</Card>

			<CreateFormDialog
				isOpen={openDialog}
				handleSubmit={handleSubmit}
				handleClose={handleClose}
			/>
		</>
	);
}
