import { HTMLAttributes } from 'react';
import Button from '../Button/Button';

interface EditButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children?: never;
}

export default function EditButton(props: EditButtonProps) {
	return (
		<Button variant="contained" {...props}>
			Éditer
		</Button>
	);
}
