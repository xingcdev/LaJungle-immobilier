import { HTMLAttributes } from 'react';
import Button from '../Button/Button';

interface CancelButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children?: never;
}

export default function CancelButton(props: CancelButtonProps) {
	return (
		<Button variant="outlined" {...props}>
			Annuler
		</Button>
	);
}
