import { CSSProperties } from 'react';
import { RiRulerLine } from 'react-icons/ri';
import { IoBedOutline, IoCarOutline } from 'react-icons/io5';
import styles from './InfoChip.module.scss';
import { DataChip } from '@components/display';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';

interface InfoChipProps {
	style?: CSSProperties;
	surface: number;
	rooms: number;
	garages: number;
}

export default function InfoChip(props: InfoChipProps) {
	return (
		<Stack direction="row" spacing={2}>
			<Chip
				icon={<RiRulerLine size={18} />}
				label={String(props.surface) + ' m²'}
				variant="outlined"
			/>
			<Chip
				icon={<IoBedOutline size={20} />}
				label={String(props.rooms)}
				variant="outlined"
			/>
			<Chip
				icon={<IoCarOutline size={20} />}
				label={String(props.garages)}
				variant="outlined"
			/>
		</Stack>
	);
}
