import '@styles/main.scss';
import Sidebar from './components/layout/navigation/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Sidebar />
			<Outlet />
		</div>
	);
}

export default App;
