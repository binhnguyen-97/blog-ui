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
          content="BiDu blog là nơi chia sẻ những bài viết xoay quanh chủ đề về cuộc sống và công nghệ."
        />
        <meta
          name="og:description"
          content="BiDu blog là nơi chia sẻ những bài viết xoay quanh chủ đề về cuộc sống và công nghệ. Các bài viết đều dựa theo những trải nghiệm và nghiên cứu thức tế của bọn mình."
        />
        <meta
          name="og:title"
          content="BiDu&apos;s Blog - Life and Technology"
        />
        <meta
          name="og:image"
          content="/slogan-logo.svg"
        />
        <meta
          name="og:url"
          content={process.env.NEXT_PUBLIC_BASE_URL}
        />
      </Head>
      <Home articleList={articleList} highlightArticles={highlightArticles} />
    </>
  )
}

export default HomePage
