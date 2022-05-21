import styles from './InputError.module.scss';

interface InputErrorProps {
	message: string;
}

export default function InputError(props: InputErrorProps) {
	return (
		<section className={styles.inputError}>
			<small>{props.message}</small>
		</section>
	);
}
