import { Link } from 'react-router-dom';
import styles from './HousingCard.module.scss';
import { Card } from '@components/container';
import InfoChip from '../../housings/InfoChip/InfoChip';

interface HousingCardProps {
	housingId: number;
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
		<Card hasHoverEffect style={{ padding: 0, maxWidth: 300, border: 'none' }}>
			<Link to={`housings/${props.housingId}`}>
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

				<InfoChip
					surface={props.surface}
					rooms={props.rooms}
					cars={props.cars}
				/>
			</section>
		</Card>
	);
}

export default HousingCard;
