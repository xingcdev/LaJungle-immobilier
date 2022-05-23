import styles from './LoginPage.module.scss';
import Logo from '@assets/logo.svg';
import LoginForm from '../LoginForm/LoginForm';

function LoginPage() {
	return (
		<section className={styles.page}>
			<section className={styles.pageContent}>
				<section className={styles.logoSection}>
					<section className="logo">
						<img src={Logo} alt="Logo" width={120} height={120} />
					</section>
					<h1 className={styles.title}>Connectez-vous à votre compte LaJungle</h1>
				</section>

				<LoginForm />
			</section>
		</section>
	);
}

export default LoginPage;
