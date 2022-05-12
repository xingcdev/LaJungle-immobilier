import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@styles/main.scss';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import SalesPage from './pages/SalesPage/SalesPage';
import LoginPage from './pages/LoginPage/LoginPage';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<HomePage />}></Route>
				<Route path="sales" element={<SalesPage />}></Route>
			</Route>

			<Route path="/login" element={<LoginPage />}></Route>
		</Routes>
	</BrowserRouter>
);
