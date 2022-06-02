import { InputHTMLAttributes } from 'react';
import styles from './SubmitButton.module.scss';

interface SubmitButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	children?: never;
}

export default function SubmitButton(props: SubmitButtonProps) {
	return (
		<input
			type="submit"
			value="Sauvegarder"
			className={styles.submit}
			{...props}
		/>
	);
}
