import '@styles/main.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/views/index/HomePage/HomePage';
import SalesPage from '@/views/sales/SalesPage/SalesPage';
import LoginPage from '@/views/login/LoginPage/LoginPage';
import NotFoundPage from '@/views/404/NotFoundPage/NotFoundPage';
import { Dashboard } from '@components/layout';

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
