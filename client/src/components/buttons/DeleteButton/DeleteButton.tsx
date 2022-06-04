import Button, { ButtonProps } from '@mui/material/Button';
import { IoRemoveCircleOutline } from 'react-icons/io5';

interface DeleteButtonProps extends ButtonProps {
	children?: never;
}

export default function DeleteButton(props: DeleteButtonProps) {
	return (
		<Button
			{...props}
			variant="contained"
			color="error"
			startIcon={<IoRemoveCircleOutline />}
		>
			Supprimer
		</Button>
	);
}
