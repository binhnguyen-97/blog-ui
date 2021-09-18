import { IWriter } from "./writer";

export interface IArticle {
  id: string,
  title: string,
  shortDescription: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  author: IWriter,
  thumbnail?: string,
  banner?: string,
  category?: string[],
}

export type IArticleList = Array<IArticle>
