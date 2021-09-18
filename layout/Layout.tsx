import type { ReactChild } from 'react';
import Image from 'next/image';

import Header from '../components/Header';
import Footer from '../components/Footer';

import BlogBanner from '../assets/images/slogan-logo.svg';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactChild
}

const Layout = ({
  children
}: LayoutProps) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <main>
        <div className={styles.BlogLogo} >
          <Image src={BlogBanner} alt="" objectFit="contain" width="500px" height="150px" />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
