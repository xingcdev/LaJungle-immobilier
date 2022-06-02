import { InputHTMLAttributes } from 'react';
import { FieldError } from '@components/form';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	className?: string;
	error?: string;
}

export default function Input(props: InputProps) {
	return (
		<div className={`field ${props.className}`}>
			<label htmlFor={props.name}>
				{props.label}
				<input id={props.name} className={styles.input} {...props}></input>
				{props.error && <FieldError message={props.error} />}
			</label>
		</div>
	);
}
