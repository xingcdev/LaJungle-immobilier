import { CSSProperties } from 'react';
import { RiRulerLine } from 'react-icons/ri';
import { IoBedOutline, IoCarOutline } from 'react-icons/io5';
import styles from './InfoChip.module.scss';
import { DataChip } from '@components/display';

interface InfoChipProps {
	style?: CSSProperties;
	surface: number;
	rooms: number;
	cars: number;
}

export default function InfoChip(props: InfoChipProps) {
	return (
		<ul className={styles.info}>
			<li className={styles.surface}>
				<DataChip
					icon={<RiRulerLine size={20} />}
					text={String(props.surface) + ' m²'}
				/>
			</li>
			<li className={styles.rooms}>
				<DataChip
					icon={<IoBedOutline size={20} />}
					text={String(props.rooms)}
				/>
			</li>
			<li className={styles.cars}>
				<DataChip icon={<IoCarOutline size={20} />} text={String(props.cars)} />
			</li>
		</ul>
	);
}
