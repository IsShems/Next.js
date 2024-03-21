import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css'; 

const Account = () => (
  <>
    <Head>
      <title>Account</title>
      <meta name="description" content="Account is not Main Page" />
    </Head>
    <div className={styles.customBody}>
      <h1 className={styles.container}>Account Page</h1>
      <Link href="/"> 
        <div>Back to Home</div>
      </Link>
    </div>
  </>
);

export default Account;
