import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
      <header>
        <nav>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/drivers'>
            <a>Drivers</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <span>I&apos;m footer</span>
      </footer>
    </>
  );
};

export default Layout;
