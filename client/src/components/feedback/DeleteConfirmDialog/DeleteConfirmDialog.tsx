import { ReactNode } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { CancelButton, OKButton } from '@components/buttons';
import Alert from '@mui/material/Alert';

interface DeleteConfirmDialogProps extends DialogProps {
	onClose: () => void;
	onConfirm: () => void;
	loading: boolean;
	title: string;
	children: ReactNode;
}

export default function DeleteConfirmDialog(props: DeleteConfirmDialogProps) {
	return (
		<Dialog {...props}>
			<DialogTitle color="error">{props.title}</DialogTitle>
			<DialogContent>
				<Alert severity="warning">{props.children}</Alert>
			</DialogContent>
			<DialogActions>
				<CancelButton onClick={props.onClose} />
				<OKButton onClick={props.onConfirm} loading={props.loading} />
			</DialogActions>
		</Dialog>
	);
}
