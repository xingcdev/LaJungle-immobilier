import { ReactNode, HTMLAttributes } from 'react';
import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	hasHoverEffect?: boolean;
	children: ReactNode;
}

function Card(props: CardProps) {
	return (
		<section
			className={`${styles.card} ${props.hasHoverEffect && styles.hasHover}`}
			{...props}
		>
			{props.children}
		</section>
	);
}

export default Card;
