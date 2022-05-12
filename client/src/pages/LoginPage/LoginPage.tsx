import './LoginPage.styles.scss';
import Logo from '@assets/logo.svg';

function LoginPage() {
	return (
		<section className="login-page">
			<section className="login-page__content">
				<section className="login-page__logo-section">
					<section className="logo">
						<img src={Logo} alt="Logo" width={150} height={150} />
					</section>
					<h3 className="login-page__title">Se connecter</h3>
				</section>

				<div className="login-form">
					<form>
						<input type="text" name="name" />
						<input type="text" name="name2" />
					</form>
				</div>
			</section>
		</section>
	);
}

export default LoginPage;
