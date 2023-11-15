import { categories } from '..';

export const fetchCategories = () => {
  const data = categories
    .get('')
    .then((res) => res.data)
    .catch((e) => console.log(e));
  return data;
};
