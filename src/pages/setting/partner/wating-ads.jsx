import React from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import EmptyRow from '@/components/common/EmptyRow';
import { useAds } from './hooks/use-ads';
import { useState } from 'react';
import AdItemSkeleton from '@/components/setting/ad-item-skeleton';

import WaitingAdsItem from './waiting-ads-item';
import { useIntersectionObserver } from '@/hooks/use-intersection-abserver';

export default function PartnerWaitingAds() {
  const { GetAdsList } = useAds();
  const { isLoading, data: ads, error, fetchNextPage, hasNextPage } = GetAdsList('waiting');
  const { setTarget } = useIntersectionObserver({ hasNextPage, fetchNextPage });

  return (
    <>
      <Card className="flex justify-center">
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-12 max-sm:grid-cols-6  items-center">
              <TableHead className="col-span-3 ">상품</TableHead>

              <TableHead className="justify-center col-span-2 max-sm:hidden">카테고리</TableHead>
              <TableHead className="justify-center col-span-2 max-sm:hidden">신청/모집</TableHead>

              <TableHead className="text-center col-span-2 justify-center max-sm:hidden">마감일</TableHead>
              <TableHead className="text-center col-span-3 justify-center"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && <AdItemSkeleton />}
            {error && <p>Error</p>}
            {ads?.pages?.[0].pageInfo?.totalElements === 0 && (
              <EmptyRow
                mainMessage="등록된 광고가 없습니다😢"
                link="/product/create"
                subMessage="새 광고를 등록해보세요"
              />
            )}
            {ads?.pages.length > 0 &&
              ads?.pages.map((page) => {
                return page.data?.map((ad) => <WaitingAdsItem ads={ad} key={ad.advertisementId} />);
              })}

            <div ref={setTarget} className="h-0"></div>
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
