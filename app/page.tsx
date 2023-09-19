import ServerComponent from '@/src/serverComponent/ServerComponent';
import Link from 'next/link';
import styles from './page.module.css';

export default function Page() {
  return (
    <div>
      This is Root Page
      <Link href={'/child1'}>Go To Child1</Link>
      <br />
      <div>
        <h1 className={styles.pageTitle}>This is a Page</h1>
      </div>
      <ServerComponent />
    </div>
  );
}
