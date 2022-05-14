import { ReactNode } from 'react';
import styles from './DataChip.module.scss';

interface DataChipProps {
	icon?: ReactNode;
	text: string;
}

export default function DataChip(props: DataChipProps) {
	return (
		<span className={styles.dataChip}>
			{props.icon}
			<small className={styles.text}>{props.text}</small>
		</span>
	);
}
