import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

import { IArticle } from '../../interfaces/article';
import nameToUrl from '../../services/utils/nameToUrl';

import lifeDefaultImageSrc from "../../assets/images/life-default-banner.png";
import techDefaultImageSrc from "../../assets/images/tech-default-banner.png";

import styles from './HighlightArticle.module.scss';

interface HighlightArticleProps {
  article: IArticle
}

const HighlightArticle = ({
  article
}: HighlightArticleProps) => {
  const router = useRouter();

  const { banner, title, createdAt } = article;

  const articleUrl = `/${nameToUrl(title)}`;

  const onClickDiscover = () => {
    router.push(articleUrl)
  }

  const getDefaultBanner = () => {
    return article.category && article.category[0] !== 'life' ? techDefaultImageSrc : lifeDefaultImageSrc;
  }

  const bannerImageSrc = banner ?? getDefaultBanner();

  const createTime = format(new Date(createdAt), "dd/MM/yyyy")

  return (
    <div className={styles.HighlightArticle}>
      <div className={styles.BannerWrapper}>
        <Image src={bannerImageSrc} alt="" className={styles.Banner} />
      </div>
      <div className={styles.HighlightItem}>
        <div className={styles.HighlightItemCategories}>
          <Link href="/">Đời sống</Link>
          <Link href="/">Ẩm thực</Link>
        </div>
        <h3 className={styles.HighlightItemTitle}>
          <Link href={`/${nameToUrl(title)}`}>
            {title}
          </Link>
        </h3>
        <p className={styles.HighlightItemCreateTime}>{createTime}</p>
        <div className={styles.HighlightItemDiscover} onClick={onClickDiscover}>Khám phá ngay</div>
      </div>
    </div>
  )
}

export default HighlightArticle
