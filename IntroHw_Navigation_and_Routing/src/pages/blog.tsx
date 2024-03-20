import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css'; 

const Blog = () => (
  <>
    <Head>
      <title>Blog</title>
      <meta name="description" content="Blog is not Main Page" />
    </Head>
    <div className={styles.customBody}>
      <h1 className={styles.container}>Blog Page</h1>
      <Link href="/"> 
        <div>Back to Home</div>
      </Link>
    </div>
  </>
);

export default Blog;
