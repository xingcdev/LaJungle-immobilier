import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

interface SubmitButtonProps extends LoadingButtonProps {
	children?: never;
	loading: boolean;
}

export default function SubmitButton(props: SubmitButtonProps) {
	return (
		<LoadingButton
			{...props}
			type="submit"
			loading={props.loading}
			loadingPosition="start"
			startIcon={<SaveIcon />}
			variant="contained"
		>
			OK
		</LoadingButton>
	);
}
