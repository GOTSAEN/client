import List from '@/components/home/list';
import Promotion from '@/components/home/promotion';

export default function Home() {
  console.log('들어왔어');
  return (
    <main className="flex flex-col gap-4">
      <Promotion
        promotion="mostBookmarked"
        mainTitle="🔥인기가 많은 상품"
        subTitle="찜이 많아요"
        color={'rgba(255, 102, 102, 0.3)'}
      />
      <Promotion
        promotion="nearDeadline"
        mainTitle="⏰신청 마감일이 임박한 상품"
        subTitle="서둘러서 신청하세요!"
        color={'rgba(131, 162, 255, 0.3)'}
      />
      <h2 className="text-xl font-bold text-center">전체상품</h2>
      <List />
    </main>
  );
}
