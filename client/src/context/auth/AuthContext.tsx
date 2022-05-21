import { createContext, ReactNode, useState } from 'react';

interface AuthContextType {
	user: any;
	isAuthenticated: boolean;
	login: (username: string, password: string, callback: VoidFunction) => void;
	logout: (callback: VoidFunction) => void;
	error: string;
}

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [error, setError] = useState('');

	const user = {};

	function login(username: string, password: string, callback: VoidFunction) {
		// TODO: fetch API
		if (username === 'admin' && password === 'admin') {
			setIsAuthenticated(true);
			// setUser()
			callback();
		} else {
			setError('Nom utilisateur ou mot de passe invalide.');
		}
	}

	function logout(callback: VoidFunction) {
		// TODO: fetch API
		setIsAuthenticated(false);
		// setUser(null)
		callback();
	}

	return (
		<AuthContext.Provider
			value={{ user, isAuthenticated, login, logout, error }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext;
