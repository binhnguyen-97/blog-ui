import isEmpty from 'lodash/isEmpty';
import cx from 'classnames';

import ArticleItem from '../ArticleItem';

import { IArticleList } from '../../interfaces/article';

import styles from './ArticleListing.module.scss';

interface ArticleListing {
  className?: string,
  articleList: IArticleList
}

const ArticleListing = ({
  className,
  articleList
}: ArticleListing) => {

  const componentClassName = cx(styles.ArticleListing, className)

  if (isEmpty(articleList)) return <div />

  return (
    <div className={componentClassName}>
      {articleList.map(article => <ArticleItem key={article.id} article={article} />)}
    </div>
  )
}

export default ArticleListing
