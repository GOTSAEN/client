import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '../../../components/ui/card';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EmptyRow from '@/components/common/EmptyRow';
import { imageSize } from '@/css/image';
import { link_text } from '@/css';
import { useWaiting } from '@/hooks/use-waiting';
import { useAdsList } from './hooks/use-ads-list';
import AdItemSkeleton from '@/components/setting/ad-item-skeleton';

export default function WaitingAds() {
  const [page, setPage] = useState(1);
  const { waitingLoading, handleEnroll } = useWaiting();
  const { GetAdsList } = useAdsList();
  const { isLoading, data: ads, error } = GetAdsList(page, 'waiting');
  return (
    <>
      <Card className="flex justify-center">
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-7 items-center">
              <TableHead className="col-span-3 max-sm:col-span-4">상품</TableHead>
              <TableHead className="justify-center col-span-1 max-sm:col-span-2">카테고리</TableHead>
              <TableHead className="justify-center col-span-1 max-sm:hidden">상태</TableHead>

              <TableHead className="text-center col-span-1 justify-center max-sm:hidden">신청일</TableHead>
              <TableHead className="text-center col-span-1 justify-center"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && <AdItemSkeleton />}
            {ads?.length > 0 &&
              ads.map(
                ({ applicationId, advertisementId, adName, adImage, adCategory, createdAt, status, memberId }) => (
                  <TableRow className="grid grid-cols-7 px-1 hover:cursor-pointer" key={applicationId}>
                    <TableCell className="col-span-3 max-sm:col-span-4">
                      <img loading="lazy" src={adImage ? adImage : '/no_img.jpg'} alt={adName} className={imageSize} />
                      <Link to={`/product?id=${advertisementId}`} className={`${link_text} line-clamp-2`}>
                        {adName}
                      </Link>
                    </TableCell>
                    <TableCell className="justify-center col-span-1 max-sm:col-span-2">{adCategory}</TableCell>
                    <TableCell className="justify-center col-span-1 max-sm:hidden">{status}</TableCell>
                    <TableCell className="col-span-1 justify-center max-sm:hidden">{createdAt.slice(0, 10)}</TableCell>
                    <TableCell className="text-right right col-span-1 justify-end">
                      <Button
                        onClick={async () => {
                          await handleEnroll({ advertisementId, memberId });
                        }}
                        disabled={waitingLoading}
                        size="sm"
                      >
                        <X size={14} />
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )}
            {ads?.length === 0 && (
              <EmptyRow mainMessage="대기중인 광고가 없습니다😢" link="/" subMessage="새 광고를 신청해보세요" />
            )}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
