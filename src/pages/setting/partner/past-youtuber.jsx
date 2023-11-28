import React, { useState } from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';

import { useYoutuberList } from './hooks/use-youtuber-list';
import { useParams } from 'react-router-dom';
import EmptyRow from '@/components/common/EmptyRow';
import ProgressYoutuberItem from './progress-youtuber-item';
import CompactAdInfo from '@/components/common/ad/CompactAdInfo';

export default function PastYoutuber() {
  const campaignId = useParams().campaignId;
  const [page, setPage] = useState(1);
  const { GetYoutuberList } = useYoutuberList();
  const { isLoading, data: youtubers, error } = GetYoutuberList(campaignId, page, 'progress');
  return (
    <>
      <CompactAdInfo id={campaignId} />
      <Card className="flex justify-center">
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-5 items-center">
              <TableHead className="col-span-2">유튜버</TableHead>

              <TableHead className="text-center justify-center  col-span-2">등록날짜</TableHead>
              <TableHead className="text-center justify-center ">링크</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {youtubers?.length > 0 ? (
              youtubers?.map((youtuber) => (
                <ProgressYoutuberItem data={youtuber} key={youtuber.applicationId} campaignStatus="FINISHED" />
              ))
            ) : (
              <EmptyRow mainMessage="유튜버를 모집중 입니다😂" />
            )}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
