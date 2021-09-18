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
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/blog-logo.png`}
        />
        <meta
          property="og:description"
          content="BiDu blog là nơi chia sẻ những bài viết xoay quanh chủ đề về cuộc sống và công nghệ. Các bài viết đều dựa theo những trải nghiệm và nghiên cứu thức tế của bọn mình."
        />
        <meta
          property="og:title"
          content="BiDu&apos;s Blog - Life and Technology"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/blog-logo.png`}
        />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_BASE_URL}
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="fb:app_id"
          content="248079427097756"
        />
      </Head>
      <Home articleList={articleList} highlightArticles={highlightArticles} />
    </>
  )
}

export default HomePage
