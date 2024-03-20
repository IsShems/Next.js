import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css'; 

const About = () => (
  <>
    <Head>
      <title>About</title>
      <meta name="description" content="About is not Main Page" />
    </Head>
    <div className={styles.customBody}>
      <h1 className={styles.container}>About Page</h1>
      <Link href="/"> 
      <div>Back to Home</div>
      </Link>
    </div>
  </>
);

export default About;
