import Link from 'next/link';

import URLs from '../urls';
import styles from './Navbar.module.scss';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <img src="/assets/images/logo2.svg" draggable={false} />
        </a>
      </Link>
      <div className={styles.actions}>
        <a href={URLs.ProjectTracker}>Project Tracker</a>
        {/* <a>Developers</a> */}
        {/* <a>Download</a> */}
        {/* <a><Globe size={28} strokeWidth={2} /></a> */}
      </div>
    </div>
  );
}
