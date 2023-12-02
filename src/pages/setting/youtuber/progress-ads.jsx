import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { useAdsList } from './hooks/use-ads-list';
import EmptyRow from '@/components/common/EmptyRow';
import { useApplication } from '@/hooks/use-application';
import ProgressAdItem from './progress-ad-item';
import { Card } from '@/components/ui/card';

export default function ProgressAds() {
  const [page, setPage] = useState(1);
  const { GetAdsList } = useAdsList();
  const { isLoading, data: ads, error } = GetAdsList(page, 'progress');
  return (
    <>
      <Card className="flex justify-center">
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-12 items-center ">
              <TableHead className="col-span-5">상품</TableHead>
              <TableHead className="text-right col-span-2 justify-center">카테고리</TableHead>
              <TableHead className="text-center col-span-5 ">URL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ads?.length > 0 && (
              ads.map((ad) => <ProgressAdItem data={ad} key={ad.applicationId} />)
            ) }
            {ads?.length === 0  (
              <EmptyRow mainMessage="진행중인 광고가 없습니다😢" link="/" subMessage="새 광고를 신청해보세요" />
            )}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
