import { IArticleList } from '../../interfaces/article'
import { getRequest } from './base';


interface FetchAllArticleRequestParams {
  limit?: number,
  offset?: number,
}

export const fetchAllArticle = (params?: FetchAllArticleRequestParams) => {
  return getRequest<IArticleList, FetchAllArticleRequestParams>("/v1/public/articles", params)
}

export const fetchHighlightArticle = () => {
  return getRequest<IArticleList, unknown>("/v1/public/articles/highlight")
}

