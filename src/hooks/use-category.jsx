import { fetchCategories } from '@/api/categories';
import { useQuery } from 'react-query';

export function useCategory() {
  const {
    isLoading: categoryLoading,
    data: categories,
    error: categoryError,
  } = useQuery(['categories'], async () => await fetchCategories().then((res) => res), {
    staleTime: 1000 * 60 * 24,
  });

  return { categoryLoading, categoryError, categories };
}
