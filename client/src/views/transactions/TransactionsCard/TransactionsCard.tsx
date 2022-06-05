import { Link } from 'react-router-dom';
//import InfoChip from '../../housings/InfoChip/InfoChip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TransactionPhoto from '@assets/transactions/transaction-photo.png';
import styles from './TransactionsCard.module.scss';

interface TransactionsCardProps {
	//Voici le retour web du getAll
	//idTransaction: 1, prixVente: 135, pourcentageCommission: "4.20", idLogement: 3
	idTransaction: number;
	adresse: string;
	prixVente: number;
	pourcentageCommission: number;
	montantCommission: number;
	nomClient: string;
	// photo?: string;
	// price: number;
	// address: string;
	// postalCode: string;
	// city: string;
	// surface: number;
	// rooms: number;
	// garages: number;
}

function TransactionCard(props: TransactionsCardProps) {
	return (
		// <CardMedia
		// 				component="img"
		// 				height="170"
		// 				image={TransactionPhoto}
		// 				alt="transaction-photo"
		// 			/>

		// <li className={styles.visitItem}>
		// 		<span className={styles.date}>Sunday 10th may </span>
		// 		<span className={styles.time}>10h - 11h</span>
		// 	</li>
		<Card sx={{ maxWidth: 2000 }} variant="outlined">
			{/* <Link to={`transaction/${props.idTransaction}`}> */}
			<CardActionArea>
				<CardContent>
					<li className={styles.visitItem}>
						<span><Typography color="text.secondary">{props.idTransaction}</Typography> </span>
						<span><Typography color="text.secondary">{props.prixVente} €</Typography> </span>
						<span><Typography color="text.secondary">{props.pourcentageCommission} %</Typography> </span>
						<span><Typography color="text.secondary">{props.adresse}</Typography></span>
						<span><Typography color="text.secondary">{props.nomClient}</Typography></span>
						<span><Typography color="text.secondary">{props.montantCommission} €</Typography></span>
					</li>

					{/* <Typography
								variant="body2"
								color="text.secondary"
								component="span"
							>
							</Typography> */}
				</CardContent>
			</CardActionArea>
			{/* </Link> */}
		</Card>
	);
}

export default TransactionCard;
