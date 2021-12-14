import Link from 'next/link';

import URLs from '../urls';
import styles from './Navbar.module.scss';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <img src="/assets/images/logo3.svg" draggable={false} />
        </a>
      </Link>
      <div className={styles.actions}>
        <a href={URLs.GitHub}>GitHub</a>
        {/*         <a>Why Netscape?</a>
        <a>Features</a>
        <a>Contribute</a>
        <a>Request Early Access</a> */}
      </div>
    </div>
  );
}
