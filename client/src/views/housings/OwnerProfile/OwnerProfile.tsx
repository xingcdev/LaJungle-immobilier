import { CSSProperties } from 'react';
import styles from './OwnerProfile.module.scss';
import { Card } from '@components/container';

interface OwnerProfileProps {
	style?: CSSProperties;
}

export default function OwnerProfile(props: OwnerProfileProps) {
	return (
		<Card style={props.style}>
			<section className={styles.photo}>
				<img
					src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					alt="user"
					width={150}
					height={150}
				/>
			</section>
			<p className={styles.name}>CHEN Xingounette</p>
		</Card>
	);
}
