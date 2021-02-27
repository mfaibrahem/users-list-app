import styles from './404.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  const timeOut = 5;
  const [counter, setCounter] = useState(timeOut);
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, timeOut * 1000);
  }, []);

  useEffect(() => {
    const intervalHandler = () => {
      setCounter((prevState) => prevState - 1);
    };
    setInterval(intervalHandler, 1000);

    return () => {
      clearTimeout(intervalHandler);
    };
  }, []);

  return (
    <div className="mfa-container">
      <div className={styles['not-found-page']}>
        <h1>Oooops...</h1>
        <h1>That page cannot be found.</h1>
        <div className={styles['back-div']}>
          Go back to the{' '}
          <Link href="/">
            <a>Home page</a>
          </Link>
          <div className={styles['redirect-wrap']}>
            redirecting after <span>{counter}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
