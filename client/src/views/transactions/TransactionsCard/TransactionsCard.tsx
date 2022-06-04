import { Link } from 'react-router-dom';
//import InfoChip from '../../housings/InfoChip/InfoChip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PreviewPhoto from '@assets/housings/housing-preview.png';

interface TransactionsCardProps {
	clientId: number;
	logementId: number;
	prixVent: number;
	pourcentageCommission: number;
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
		<Card sx={{ maxWidth: 310 }} variant="outlined">
			<Link to={`transaction/${props.clientId}`}>
				<CardActionArea>
					{/* <CardMedia
						component="img"
						height="170"
						image={PreviewPhoto}
						alt="housing-preview"
					/> */}
					{/* <CardContent>
						<Typography gutterBottom variant="h5" color="text.primary">
							{props.price} €
						</Typography>
						<Typography color="text.secondary">{props.address}</Typography>
						<Typography color="text.secondary">
							{props.postalCode}{' '}
							<Typography
								variant="body2"
								color="text.secondary"
								component="span"
							>
								{props.city}
							</Typography>
						</Typography>
						<InfoChip
							surface={props.surface}
							rooms={props.rooms}
							garages={props.garages}
						/>
					</CardContent> */}
				</CardActionArea>
			</Link>
		</Card>
	);
}

export default TransactionCard;
