import styles from './AppHeader.module.scss';
import Logo from '../Logo/Logo';

function AppHeader() {
	return (
		<header className={styles.header}>
			<Logo />
		</header>
	);
}

export default AppHeader;
