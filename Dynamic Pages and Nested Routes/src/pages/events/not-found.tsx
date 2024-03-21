// NotFound.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/EventDetails.module.css'; 

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404 - Not Found</h1>
      <p className={styles.notFoundText}>You will be redirected to Home Page in a few seconds...</p>
    </div>
  );
};

export default NotFound;
