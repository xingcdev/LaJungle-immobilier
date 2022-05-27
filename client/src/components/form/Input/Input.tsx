import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	className?: string;
}

export default function Input({ type = 'text', ...props }: InputProps) {
	return (
		<>
			{props.label ? (
				<label htmlFor={props.name} className={props.className}>
					{props.label}
					<input id={props.name} {...props}></input>
				</label>
			) : (
				<input id={props.name} className={props.className} {...props}></input>
			)}
		</>
	);
}
