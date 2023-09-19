import styles from '../../app/layout.module.css';

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      {/* 푸터 내용 */}
      <p>&copy; {new Date().getFullYear()} Pet-K-In</p>
    </footer>
  );
}

export default FooterComponent;
