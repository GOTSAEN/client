import List from '@/components/home/list';
import Promotion from '@/components/home/promotion';

export default function Home() {
  return (
    <main>
      <Promotion promotion="mostBookmarked" mainTitle="가장 많이 찾는 상품이에요" />
      <Promotion promotion="nearDeadline" />
      <List />
    </main>
  );
}
