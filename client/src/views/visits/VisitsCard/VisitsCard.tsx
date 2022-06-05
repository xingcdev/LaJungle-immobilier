import { Link } from 'react-router-dom';
//import InfoChip from '../../housings/InfoChip/InfoChip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TransactionPhoto from '@assets/transactions/transaction-photo.png';
import styles from './VisitsCard.module.scss';

interface VisitsCardProps {
	idVisite:number;
	dateHeureVisite:string;
	adresse:string;
	nomClient:string;
}

function VisitsCard(props: VisitsCardProps) {
	return (
		<Card sx={{ maxWidth: 1000 }} variant="outlined">
			{/* <Link to={`transaction/${props.idTransaction}`}> */}
				<CardActionArea>
					<CardContent>
						<li className={styles.visitItem}>
							<span><CardMedia component="img"
						height="80rem"
					image={TransactionPhoto}
						alt="transaction-photo"
					/></span>
					{/* idVisite:number;
	dateHeureVisite:string;
	adresse:string;
	nomClient:string; */}
							<Typography component='span' color="text.secondary">{props.idVisite}</Typography>
							{/* <Typography component='span' color="text.secondary">{new Date(props.dateHeureVisite).toLocaleDateString('fr-FR')}</Typography> */}
							<Typography component='span' color="text.secondary">{new Date(props.dateHeureVisite).toLocaleString('fr-FR')}</Typography>
							<Typography component='span' color="text.secondary">{props.adresse}</Typography>
							<Typography component='span' color="text.secondary">{props.nomClient}</Typography>
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

export default VisitsCard;
