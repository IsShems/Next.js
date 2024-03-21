import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'; 

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <meta name="description" content="Home is Main Page" />
    </Head>
    <div className={styles.customBody}>
      <h1 className={styles.container}>Home Page</h1>
       <Link href="/todos">
           <div>Todos</div>
       </Link>
    </div>
  </>
);

export default Home;
