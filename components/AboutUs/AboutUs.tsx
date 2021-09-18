import Image from 'next/image';
import cx from 'classnames'

import aboutUsSrc from '../../assets/images/about-us.jpeg';

import styles from './AboutUs.module.scss';

interface AboutUsProps {
  className?: string
}

const AboutUs = ({
  className
}: AboutUsProps) => {
  const componentClassName = cx(styles.Container, className)
  return (
    <div className={componentClassName}>
      <h5 className={styles.HeaderLine}>Về chúng tôi</h5>
      <div className={styles.Image}>
        <Image src={aboutUsSrc} alt="" width={260} height={260} objectFit="cover" />
      </div>
      <p className={styles.Description}>
        BiDu&lsquo;s Blog là sự tập hợp những bài viết từ Bình và Dương.
        <br />
        Ở đây chúng tôi chia sẽ những hoặc động thường nhật cũng như là những kiến thức đúc kết được trong quá trình sinh sống, học tập và làm việc.
        <br />
        Hi vọng những bào viết chũng mình chia sẻ sẽ giúp cho các bạn giảm căng thẳng hoặc kiếm tìm được thông tin bổ ích cho bản thân.
        <br />
        Stay safe !!!
      </p>
    </div>
  )
}

export default AboutUs
