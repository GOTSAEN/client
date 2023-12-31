import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useProgressAds } from './hooks/use-progress-ads';
import EmptyRow from '@/components/common/EmptyRow';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { imageSize } from '@/css/image';
import { link_text } from '@/css';
import { useAds } from './hooks/use-ads';
import AdItemSkeleton from '@/components/setting/ad-item-skeleton';
import { useIntersectionObserver } from '@/hooks/use-intersection-abserver';

export default function PartnerProgressAds() {
  const { GetAdsList } = useAds();
  const {
    isLoading,
    data: ads,
    error,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
  } = GetAdsList('progress');
  const { setTarget } = useIntersectionObserver({ hasNextPage, fetchNextPage, isFetchingNextPage, isFetching });
  const [updateAdToFinish] = useProgressAds();
  console.log('error', ads);
  const handleAdToFinish = (e, id) => {
    e.preventDefault();
    updateAdToFinish(id);
  };

  return (
    <>
      <Card className="flex justify-center">
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-11 items-center max-sm:grid-cols-9">
              <TableHead className="col-span-4">상품</TableHead>
              <TableHead className="justify-center col-span-1">카테고리</TableHead>
              <TableHead className="justify-center col-span-2">유튜버 수</TableHead>
              <TableHead className="text-right col-span-2 max-sm:hidden justify-center">진행률</TableHead>
              <TableHead className="text-center col-span-2 justify-center"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && <AdItemSkeleton />}

            {ads?.pages?.[0].pageInfo?.totalElements === 0 && <EmptyRow mainMessage={'진행중인 광고가 없습니다😢'} />}
            {ads?.pages.length > 0 &&
              ads?.pages.map((page) => {
                return page.data?.map(({ advertisementId, productName, imageUrl, category }) => (
                  <Link to={`campaign/${advertisementId}`}>
                    <TableRow className="grid grid-cols-11 px-1 hover:cursor-pointer max-sm:grid-cols-9">
                      <TableCell className="col-span-4">
                        <img
                          loading="lazy"
                          src={imageUrl ? imageUrl : '/no_img.jpg'}
                          alt="thumbnail"
                          className={imageSize}
                        />
                        <Link to={`/product?id=${advertisementId}`} className={link_text}>
                          {productName}
                        </Link>
                      </TableCell>
                      <TableCell className="justify-center col-span-1">{category}</TableCell>
                      <TableCell className="justify-center col-span-2">3</TableCell>
                      <TableCell className="col-span-2 justify-center max-sm:hidden ">
                        <Progress value={30} className="w-full" />
                      </TableCell>
                      <TableCell className="text-right right col-span-2 justify-end">
                        <Button onClick={(e) => handleAdToFinish(e, advertisementId)}>
                          <Check size={14} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </Link>
                ));
              })}

            <div ref={setTarget} className="h-0"></div>
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
