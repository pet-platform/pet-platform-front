import styles from './layout.module.css';
import './globals.css';
import Link from 'next/link'
import FooterComponent from '@/src/serverComponent/FooterComponent';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>pet-k-in</title>
  </head>
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <nav className={styles.nav}>
              <div className={styles.logo}>
                {/* 로고 이미지 */}
                Logo
              </div>
              <ul className={styles.navList}>
                <li><Link href="/map">명동여지도</Link></li>
                <li><Link href="/animalinfo">반려동물 정보</Link></li>
                <li><Link href="/event">이벤트</Link></li>
                <li><Link href="/community">커뮤니티</Link></li>
                <li><Link href="/service">고객센터</Link></li>
                {/* 다른 페이지 링크를 추가하세요. */}
              </ul>
            </nav>

            <div className={styles.headerRight}>
              로그인
              {/* 비로그인 상태 : 가입/로그인 */}
              {/* 로그인 상태 : 프로필/알림 */}
            </div>
            
          </header>
          <main className={styles.main}>
            {children}
            {/* 페이지의 내용은 여기에 렌더링됩니다. */}
          </main>

          <FooterComponent/>
        </div>
      </body>
    </html>
  );
};

