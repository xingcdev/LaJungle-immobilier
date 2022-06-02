import styles from './FieldError.module.scss';

interface FieldErrorProps {
	message: string;
}

export default function FieldError(props: FieldErrorProps) {
	return (
		<section className={styles.error}>
			<small>{props.message}</small>
		</section>
	);
}
