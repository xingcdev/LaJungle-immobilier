import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';
import logo from '@assets/logo.svg';

function NotFoundPage() {
	return (
		<section className={styles.notFoundPage}>
			<section className={styles.content}>
				<section className={styles.errorCode}>
					<span>4</span>
					<img
						className={styles.logo}
						src={logo}
						alt="logo"
						width={120}
						height={120}
					/>
					<span>4</span>
				</section>
				<p className={styles.message}>
					Vous semblez être perdu au fin fond de la jungle...
				</p>
				<Link to="/">
					<small className={styles.back}> Page d'accueil</small>
				</Link>
			</section>
		</section>
	);
}

export default NotFoundPage;
