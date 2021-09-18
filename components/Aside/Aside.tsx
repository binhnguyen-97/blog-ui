import cx from 'classnames'

import AboutUs from "../AboutUs"

import styles from './Aside.module.scss';

interface AsideProps {
  className?: string
}

const Aside = ({
  className
}: AsideProps) => {

  const componentClassName = cx(styles.Container, className);

  return (
    <aside className={componentClassName}>
      <AboutUs />
    </aside>
  )
}

export default Aside
