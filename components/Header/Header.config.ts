import { PAGES, PAGES_PATH } from "../../constant";

export const headerConfig = [
  {
    label: "Trang chủ",
    path: PAGES_PATH[PAGES.HOME_PAGE]
  },
  {
    label: "Đời thường",
    path: PAGES_PATH[PAGES.CATEGORY_PAGE] + '/life'
  },
  {
    label: "Công nghệ",
    path: PAGES_PATH[PAGES.CATEGORY_PAGE] + '/tech'
  },
]
