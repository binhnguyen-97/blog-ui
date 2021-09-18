import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { headerConfig } from './Header.config';

import styles from './Header.module.scss';

const Header = () => {
  const router = useRouter();


  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <ul className={styles.Navigator}>
          {
            headerConfig.map(conf => {
              const isActive = router.pathname === conf.path;
              const navItemClassName = cx(styles.NavigatorItem, {
                [styles.NavigatorItemActive]: isActive
              })

              return <li key={conf.path} className={navItemClassName}>
                <Link href={conf.path}>
                  {conf.label}
                </Link>
              </li>
            })
          }
        </ul>
        <div className={styles.SearchBox}>
          <input placeholder="Tìm kiếm ..." />
        </div>
      </nav>
    </header>
  )
}

export default Header
