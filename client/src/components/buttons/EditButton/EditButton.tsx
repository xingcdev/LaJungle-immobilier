import Button, { ButtonProps } from '@mui/material/Button';
import { IoCreateOutline } from 'react-icons/io5';
interface EditButtonProps extends ButtonProps {
	children?: never;
}

export default function EditButton(props: EditButtonProps) {
	return (
		<Button {...props} variant="contained" startIcon={<IoCreateOutline />}>
			Éditer
		</Button>
	);
}
