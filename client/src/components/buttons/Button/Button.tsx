import { HTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant: 'contained' | 'outlined';
	children?: ReactNode;
}

export default function Button(props: ButtonProps) {
	return (
		<button
			{...props}
			className={
				props.variant === 'outlined' ? styles.outlined : styles.contained
			}
		>
			{props.children}
		</button>
	);
}
