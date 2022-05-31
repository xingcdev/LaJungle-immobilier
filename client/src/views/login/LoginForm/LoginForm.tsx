import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './LoginForm.module.scss';
import { useAuth } from '@context/auth';
import { InputError } from '@components/form';

// Define manually the state of Location because it is 'unknown' type
// see: https://github.com/reach/router/issues/414#issuecomment-1056839570
interface LocationProps {
	state: {
		from: Location;
	};
}

export default function LoginForm() {
	const auth = useAuth();

	const navigate = useNavigate();
	const location = useLocation() as unknown as LocationProps;
	const from = location.state?.from?.pathname || '/';

	const [formValues, setFormValues] = useState({ error: '' });

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;

		auth.login(username, password, () =>
			// Send them back to the page they tried to visit when they were
			// redirected to the login page. Use { replace: true } so we don't create
			// another entry in the history stack for the login page.  This means that
			// when they get to the protected page and click the back button, they
			// won't end up back on the login page, which is also really nice for the
			// user experience.
			navigate(from, { replace: true })
		);

		if (auth.error) {
			setFormValues({ error: auth.error });
		}
	}

	return (
		<form className={styles.loginForm} onSubmit={handleSubmit}>
			<input type="text" name="username" placeholder="Nom d'utilisateur" />
			<input type="password" name="password" placeholder="Mot de passe" />
			{formValues.error && <InputError message={formValues.error} />}
			<button type="submit">Connexion</button>
		</form>
	);
}
