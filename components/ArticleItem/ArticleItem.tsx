import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

import { IArticle } from '../../interfaces/article';

import nameToUrl from '../../services/utils/nameToUrl';

import lifeDefaultImageSrc from "../../assets/images/life-default-thumbnail.png";
import techDefaultImageSrc from "../../assets/images/tech-default-thumbnail.png";

import styles from './ArticleItem.module.scss'

interface ArticleItemProps {
  article: IArticle
}

const ArticleItem = ({
  article
}: ArticleItemProps) => {

  const { category, banner, createdAt, title, shortDescription } = article;

  const getDefaultBanner = () => {
    return category && category[0] !== 'life' ? techDefaultImageSrc : lifeDefaultImageSrc;
  }


  const articleUrl = `/${nameToUrl(title)}`;
  const thumbnailImgSrc = banner ?? getDefaultBanner();

  const createTime = format(new Date(createdAt), "dd/MM/yyyy")

  return (
    <Link href={articleUrl} passHref>
      <a className={styles.Container}>
        <div className={styles.Image}>
          <Image src={thumbnailImgSrc} alt={title} objectFit="cover" />
        </div>
        <div className={styles.TextGroup}>
          <div className={styles.Title}>{title}</div>
          <div className={styles.ShortDescription}>{shortDescription}</div>
          <div className={styles.CreateTime}>{createTime}</div>
        </div>
      </a>
    </Link>
  )
}

export default ArticleItem
