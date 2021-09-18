import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import isEmpty from 'lodash/isEmpty';

import Home from '../features/Home';

import promiseAllSettledHelper from '../services/utils/promiseAllSettledHelper'
import { fetchAllArticle, fetchHighlightArticle } from '../services/api/article';

export const getStaticProps: GetStaticProps = async ({ }) => {

  const [articleList, highlightArticles] = await promiseAllSettledHelper([
    fetchAllArticle(),
    fetchHighlightArticle(),
  ])

  if (isEmpty(articleList)) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      articleList,
      highlightArticles,
    }
  }
}

const HomePage = ({
  articleList,
  highlightArticles
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>BiDu&apos;s Blog</title>
        <meta
          name="description"
          content="BiDu blog là nơi chia sẻ những bài viết xoay quanh chủ đề về cuộc sống và công nghệ. Các bài viết đều dựa theo những trải nghiệm và nghiên cứu thức tế của bọn mình."
        />
        <meta
          name="image"
          content={`${process.env.BASE_URL}/slogan-logo.svg`}
        />
        <meta
          name="og:description"
          property="BiDu blog là nơi chia sẻ những bài viết xoay quanh chủ đề về cuộc sống và công nghệ. Các bài viết đều dựa theo những trải nghiệm và nghiên cứu thức tế của bọn mình."
        />
        <meta
          name="og:title"
          property="BiDu&apos;s Blog - Life and Technology"
        />
        <meta
          name="og:image"
          property={`${process.env.BASE_URL}/slogan-logo.svg`}
        />
        <meta
          name="og:url"
          property={process.env.NEXT_PUBLIC_BASE_URL}
        />
        <meta
          name="og:type"
          property="article/listing"
        />
        <meta
          name="fb:app_id"
          property="248079427097756"
        />
      </Head>
      <Home articleList={articleList} highlightArticles={highlightArticles} />
    </>
  )
}

export default HomePage
