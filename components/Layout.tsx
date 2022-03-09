import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Layout.module.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'F1 - 2022' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header className={`${styles.header} ${styles.lightColor}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href='/'>
              <a>F1 2022</a>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link href='/races'>
                  <a>Races</a>
                </Link>
              </li>
              <li>
                <Link href='/drivers'>
                  <a>Drivers</a>
                </Link>
              </li>
              <li>
                <Link href='/standings'>
                  <a>Standings</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.container}>{children}</main>
      <footer>
        <div className={`${styles.container} ${styles.footerContainer}`}>
          <span>
            &copy; <a href='https://github.com/waldemarciupa'>Waldemar Ciupa</a>{' '}
            2022
          </span>
        </div>
      </footer>
    </>
  );
};

export default Layout;
