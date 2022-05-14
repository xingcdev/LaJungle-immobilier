import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import logo from '@assets/logo.svg';

function Logo() {
	return (
		<Link to="/">
			<section className={styles.logo}>
				<img src={logo} alt="logo" width={60} height={60} />
				<p className={styles.brand}>LaJungle</p>
			</section>
		</Link>
	);
}

export default Logo;
