import { categories } from '..';

export const fetchCategories = () => {
  const data = categories
    .get('')
    .then((res) => {
      const data = res.data;
      return data.sort((a, b) => {
        if (a.categoryName === '기타') return 1;
        if (b.categoryName === '기타') return -1;
        return a.categoryName.localeCompare(b.categoryName);
      });
    })
    .catch((e) => console.log(e));
  return data;
};
