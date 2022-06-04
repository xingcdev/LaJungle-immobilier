import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { DeleteButton } from '@components/buttons';
import { DeleteConfirmDialog } from '@components/feedback';

interface DeleteHousingButtonProps {
	address: string;
	owner: string;
}

export default function DeleteHousingButton(props: DeleteHousingButtonProps) {
	const { enqueueSnackbar } = useSnackbar();
	const [openDialog, setOpenDialog] = useState(false);
	const [isDialogLoading, setIsDialogLoading] = useState(false);
	const currentHousingId = useParams().housingId;
	const navigate = useNavigate();

	function handleDialogConfirm() {
		setIsDialogLoading(true);

		fetch(`${process.env.REACT_APP_API_URL}/logement/delete`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id: currentHousingId }),
		})
			.then((res) => res.json())
			.then((json) => {
				if (json.error) throw new Error(json.error);

				if (json.data) {
					setOpenDialog(false);
					enqueueSnackbar('Le logement a été supprimé avec succès.', {
						variant: 'success',
					});
					navigate('/');
				}
			})
			.catch((error) => console.log(error))
			.finally(() => {
				setIsDialogLoading(false);
			});
	}
	return (
		<>
			<DeleteButton onClick={() => setOpenDialog(true)} />

			<DeleteConfirmDialog
				title="Supprimer un logement"
				open={openDialog}
				loading={isDialogLoading}
				onClose={() => setOpenDialog(false)}
				onConfirm={handleDialogConfirm}
			>
				Vous étes sur le point de supprimer le logement de <b>{props.owner}</b>{' '}
				situé au <b>{props.address}</b>
			</DeleteConfirmDialog>
		</>
	);
}
