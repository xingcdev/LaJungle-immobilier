import '@styles/main.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/views/index/HomePage/HomePage';
import TransactionsPage from '@/views/transactions/TransactionsPage/TransactionsPage';
import LoginPage from '@/views/login/LoginPage/LoginPage';
import NotFoundPage from '@/views/404/NotFoundPage/NotFoundPage';
import { Dashboard } from '@components/layout';
import HousingPage from './views/housings/HousingPage/HousingPage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route index element={<HomePage />}></Route>
					<Route path="housings/:id" element={<HousingPage />}></Route>
					<Route path="transactions" element={<TransactionsPage />}></Route>
				</Route>

				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="*" element={<NotFoundPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
