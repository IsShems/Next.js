import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css'; 

const Contacts = () => (
  <>
    <Head>
      <title>Contacts</title>
      <meta name="description" content="Contacts is not Main Page" />
    </Head>
    <div className={styles.customBody}>
      <h1 className={styles.container}>Contacts Page</h1>
      <Link href="/"> 
        <div>Back to Home</div>
      </Link>
    </div>
  </>
);

export default Contacts;
