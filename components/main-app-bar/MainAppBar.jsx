import Link from 'next/link';
import styles from './MainAppBar.module.scss';
const MainAppBar = () => {
  return (
    <nav className={`${styles['main-app-bar']}`}>
      <div className={`mfa-container ${styles['mfa-container']}`}>
        <div className={styles['nav-content']}>
          <Link href="/" className="logo">
            <h1>LOGO</h1>
          </Link>
          <div className={styles['main-links']}>
            <Link href="/users">
              <a>users</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainAppBar;
