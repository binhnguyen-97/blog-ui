import Carousel from '../../components/Carousel';
import HighlighArticle from '../../components/HighlighArticle';
import ArticleListing from '../../components/ArticleListing';
import Aside from '../../components/Aside';

import { IArticleList } from '../../interfaces/article';

import styles from './Home.module.scss';

interface HomeProps {
  articleList: IArticleList,
  highlightArticles: IArticleList,
}

const Home = ({
  articleList,
  highlightArticles
}: HomeProps) => {

  const renderHightLightItem = (item: any) => {
    return <HighlighArticle article={item} key={item.id} />
  }

  return (
    <div className={styles.Home}>
      <div className={styles.HomeContainer}>
        <Carousel
          elementsInfo={highlightArticles}
          renderMethod={renderHightLightItem}
        />
        <div className={styles.Content}>
          <ArticleListing className={styles.ContentMain} articleList={articleList} />
          <Aside className={styles.ContentSide} />
        </div>
      </div>
    </div>
  )
}

export default Home
