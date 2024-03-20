import Link from 'next/link';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
      <li><Link href="/contacts"><a>Contacts</a></Link></li>
      <li><Link href="/blog"><a>Blog</a></Link></li>
      <li><Link href="/account"><a>Account</a></Link></li>
    </ul>
  </nav>
);

export default Navigation;
