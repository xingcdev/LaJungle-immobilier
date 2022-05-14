import { ReactNode, CSSProperties } from 'react';
import styles from './Card.module.scss';

interface CardProps {
	style?: CSSProperties;
	children: ReactNode;
}

function Card(props: CardProps) {
	return (
		<section className={styles.card} style={props.style}>
			{props.children}
		</section>
	);
}

export default Card;
