import Button, { ButtonProps } from '@mui/material/Button';

interface CancelButtonProps extends ButtonProps {
	children?: never;
}

export default function CancelButton(props: CancelButtonProps) {
	return (
		<Button variant="outlined" {...props}>
			Annuler
		</Button>
	);
}
