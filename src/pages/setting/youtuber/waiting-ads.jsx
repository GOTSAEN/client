import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '../../../components/ui/card';
import { Link } from 'react-router-dom';
import { Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuery } from 'react-query';
import { getApplication } from '@/api/youtuber/application';
import EmptyRow from '@/components/common/EmptyRow';
import { imageSize } from '@/css/image';
import { link_text } from '@/css';

export default function WaitingAds() {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    data: ads,
    error,
  } = useQuery(['youtuber', 'waiting', 'ads'], async () => await getApplication(page, 'WAITING').then((res) => res), {
    staleTime: 1000 * 60 * 24,
  });
  return (
    <>
      <Card className="flex justify-center">
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-7 items-center">
              <TableHead className="col-span-3">상품</TableHead>
              <TableHead className="justify-center col-span-1">카테고리</TableHead>
              <TableHead className="justify-center col-span-1">상태</TableHead>

              <TableHead className="text-center col-span-1 justify-center">신청일</TableHead>
              <TableHead className="text-center col-span-1 justify-center"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ads?.length > 0 ? (
              ads.map(({ advertisementId, adName, adImage, adCategory, createdAt, status }) => (
                <TableRow className="grid grid-cols-7 px-1 hover:cursor-pointer">
                  <TableCell className="col-span-3">
                    <img src={adImage ? adImage : '/no_img.jpg'} alt="thumbnail" className={imageSize} />
                    <Link to={`/product/${advertisementId}`} className={link_text}>
                      {adName}
                    </Link>
                  </TableCell>
                  <TableCell className="justify-center col-span-1">{adCategory}</TableCell>
                  <TableCell className="justify-center col-span-1">{status}</TableCell>
                  <TableCell className="col-span-1 justify-center">{createdAt.slice(0, 10)}</TableCell>
                  <TableCell className="text-right right col-span-1 justify-end">
                    <Button>
                      <X size={14} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <EmptyRow mainMessage="대기중인 광고가 없습니다😢" link="/" subMessage="새 광고를 신청해보세요" />
            )}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
