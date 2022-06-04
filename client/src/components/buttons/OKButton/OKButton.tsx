import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';

interface OKButtonProps extends LoadingButtonProps {
	children?: never;
}

export default function OKButton(props: OKButtonProps) {
	return (
		<LoadingButton {...props} loading={props.loading} variant="contained">
			OK
		</LoadingButton>
	);
}
