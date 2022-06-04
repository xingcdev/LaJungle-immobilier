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

export default function DeleteConfirmDialog({
	onClose,
	onConfirm,
	loading,
	title,
	children,
	...dialogProps
}: DeleteConfirmDialogProps) {
	return (
		<Dialog {...dialogProps}>
			<DialogTitle color="error">{title}</DialogTitle>
			<DialogContent>
				<Alert severity="warning">{children}</Alert>
			</DialogContent>
			<DialogActions>
				<CancelButton onClick={onClose} />
				<OKButton onClick={onConfirm} loading={loading} />
			</DialogActions>
		</Dialog>
	);
}
