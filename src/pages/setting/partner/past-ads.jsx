import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '../../../components/ui/card';
import { Link } from 'react-router-dom';
import EmptyRow from '@/components/common/EmptyRow';
import { imageSize } from '@/css/image';
import { link_text } from '@/css';
import { useAds } from './hooks/use-ads';
import AdItemSkeleton from '@/components/setting/ad-item-skeleton';
export default function PartnerPastAds() {
  const [page, setPage] = useState(1);
  const { GetAdsList } = useAds();

  const { isLoading, data: ads, error } = GetAdsList(page, 'finished');
  return (
    <>
      <Card className="flex justify-center">
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-8 items-center">
              <TableHead className="col-span-4">상품</TableHead>

              <TableHead className="text-right justify-center col-span-2">카테고리</TableHead>
              <TableHead className="text-center col-span-2 justify-center">참여수</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && <AdItemSkeleton />}
            {ads?.length > 0 &&
              ads.map(({ advertisementId, imageUrl, productName, category, numberOfRecruit }) => (
                <Link to={`campaign/${advertisementId}`} key={advertisementId}>
                  <TableRow className="grid grid-cols-8 px-1">
                    <TableCell className="col-span-4">
                      <img src={imageUrl ? imageUrl : '/no_img.jpg'} alt="thumbnail" className={imageSize} />

                      <Link to={`product/${advertisementId}`} className={link_text}>
                        {productName}
                      </Link>
                    </TableCell>

                    <TableCell className="col-span-2 justify-center">{category}</TableCell>
                    <TableCell className="text-right right col-span-2 justify-center">{numberOfRecruit}</TableCell>
                  </TableRow>
                </Link>
              ))}
            {ads?.length === 0 && <EmptyRow mainMessage="종료된 광고가 없습니다😂" />}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
