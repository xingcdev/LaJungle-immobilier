import '@styles/main.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SalesPage from './pages/SalesPage/SalesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Dashboard from '@layout/Dashboard/Dashboard';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route index element={<HomePage />}></Route>
					<Route path="sales" element={<SalesPage />}></Route>
				</Route>

				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="*" element={<NotFoundPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
