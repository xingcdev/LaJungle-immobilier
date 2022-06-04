import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from '@context/auth';
import { SnackbarProvider } from 'notistack';
import Slide from '@mui/material/Slide';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<AuthProvider>
			<SnackbarProvider
				maxSnack={3}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				TransitionComponent={Slide}
			>
				<App />
			</SnackbarProvider>
		</AuthProvider>
	</BrowserRouter>
);
