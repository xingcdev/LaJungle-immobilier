import { Link } from 'react-router-dom';
import { RiRulerLine } from 'react-icons/ri';
import { IoBedOutline, IoCarOutline } from 'react-icons/io5';
import styles from './HousingCard.module.scss';
import { Card } from '@components/container';
import { DataChip } from '@components/display';

interface HousingCardProps {
	photo?: string;
	price: number;
	address: string;
	postalCode: string;
	city: string;
	surface: number;
	rooms: number;
	cars: number;
}

function HousingCard(props: HousingCardProps) {
	return (
		<Card style={{ padding: 0 }}>
			<Link to="housings/1">
				<section className={styles.preview}>
					<section className={styles.photo}>
						<img src={props.photo} alt="housing" width="100%" height={160} />
					</section>

					<p className={styles.price}>{props.price} €</p>
				</section>
			</Link>

			<section className={styles.content}>
				<section className={styles.location}>
					<p className={styles.address}>{props.address}</p>
					<p>
						<span className={styles.postalCode}>{props.postalCode}</span>
						<span className={styles.city}>{props.city}</span>
					</p>
				</section>

				<ul className={styles.info}>
					<li className={styles.surface}>
						<DataChip
							icon={<RiRulerLine size={20} />}
							text={String(props.surface) + " m²"}
						/>
					</li>
					<li className={styles.rooms}>
						<DataChip
							icon={<IoBedOutline size={20} />}
							text={String(props.rooms)}
						/>
					</li>
					<li className={styles.cars}>
						<DataChip
							icon={<IoCarOutline size={20} />}
							text={String(props.cars)}
						/>
					</li>
				</ul>
			</section>
		</Card>
	);
}

export default HousingCard;
