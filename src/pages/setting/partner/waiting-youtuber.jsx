import React, { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import { useApplication } from '@/hooks/use-application';
import EmptyRow from '@/components/common/EmptyRow';
import { useYoutuberList } from './hooks/use-youtuber-list';
import CompactAdInfo from '@/components/common/ad/CompactAdInfo';
import AdItemSkeleton from '@/components/setting/ad-item-skeleton';

export default function WaitingYoutuber() {
  const [page, setPage] = useState(1);
  const params = useParams();
  const campaignId = params.campaignId;
  const { updateStatus } = useApplication();
  const { GetYoutuberList } = useYoutuberList();
  const { isLoading, data: youtubers, error } = GetYoutuberList(campaignId, page, 'waiting');
  const handleChangeStatus = (applicationId, data) => {
    updateStatus({ applicationId, data, status: 'waiting' });
  };

  return (
    <>
      <CompactAdInfo id={campaignId} />
      <Card className="flex justify-center">
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-8 items-center max-sm:grid-cols-6">
              <TableHead className="col-span-2">유튜버</TableHead>
              <TableHead className="justify-center">구독자</TableHead>
              <TableHead className="text-right justify-center">뷰 수</TableHead>
              <TableHead className="text-center justify-center col-span-2 max-sm:hidden">신청일</TableHead>
              <TableHead className="text-center justify-center col-span-2"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading && <AdItemSkeleton type="rounded-full" />}
            {youtubers?.length > 0 &&
              youtubers.map(({ applicationId, status, createdAt, youtubeMemberImage, youtubeMemberNickname }) => (
                <TableRow className="grid grid-cols-8 hover:cursor-pointer max-sm:grid-cols-6">
                  <TableCell className="font-medium col-span-2" key={applicationId}>
                    <img src={youtubeMemberImage} className="h-[40px] w-[40px] cover block rounded-full m-2" />
                    {youtubeMemberNickname}
                  </TableCell>
                  <TableCell className="justify-center">119만명</TableCell>
                  <TableCell className="justify-center">77만회</TableCell>

                  <TableCell className="col-span-2 text-right right  justify-center max-sm:hidden">
                    {createdAt?.slice(0, 10)}
                  </TableCell>
                  <TableCell className="text-center justify-center gap-2 col-span-2">
                    {status === 'WAITING' && (
                      <>
                        <Button onClick={() => handleChangeStatus(applicationId, { status: 'PROGRESS' })} size="sm">
                          확정
                        </Button>
                        <Button
                          variant="bright"
                          className="bg-yellow-500"
                          onClick={() => handleChangeStatus(applicationId, { status: 'UNSELECTED' })}
                          size="sm"
                        >
                          반려
                        </Button>
                      </>
                    )}
                    {status === 'PROGRESS' && (
                      <>
                        <Button onClick={() => handleChangeStatus(applicationId, { status: 'WAITING' })} size="sm">
                          확정 취소
                        </Button>
                      </>
                    )}
                    {status === 'UNSELECTED' && (
                      <>
                        <Button
                          variant="secondary"
                          onClick={() => handleChangeStatus(applicationId, { status: 'WAITING' })}
                          size="sm"
                        >
                          반려 취소
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            {youtubers?.length === 0 && <EmptyRow mainMessage="유튜버를 모집중 입니다😂" />}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
