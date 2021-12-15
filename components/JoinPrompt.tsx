import { JoinLinks } from './JoinLinks';
import styles from './JoinPrompt.module.scss';

export function JoinPrompt() {
  return (
    <div className={styles.container}>
      <div className={styles.prompt}>
        <div className={styles.info}>
          <h1>Start a Netscape?</h1>
          <p>
            If you can’t wait to run a new or existing organization on Netscape
            and are willing to explore and navigate the beta, we’d love to get
            you started.
          </p>
        </div>
        <JoinLinks contrast />
      </div>
    </div>
  );
}
