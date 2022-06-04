import styles from './VisitList.module.scss';

interface VisitListProps {
	visits: any;
}

export default function VisitList(props: VisitListProps) {
	return (
		<ul className={styles.visit}>
			<li className={styles.visitItem}>
				<span className={styles.date}>Sunday 10th may </span>
				<span className={styles.time}>10h - 11h</span>
			</li>

			<li className={styles.visitItem}>
				<span className={styles.date}>Sunday 10th may </span>
				<span className={styles.time}>10h - 11h</span>
			</li>
		</ul>
	);
}
