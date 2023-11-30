import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getAllYoutuberList, getYoutuberByCategory } from '@/api/youtuber';
import { Card } from '@/components/ui/card';
import YoutuberList from '@/components/youtuber/youtuber-list';

import YoutuberListSkeleton from '@/components/youtuber/youtuber-list-skeleton';
import useYoutuber from './use-youtuber';
export default function YoutuberTable({ page, category }) {
  const { FetchAllYoutubers, FetchYoutubersByCategory, youtubers, isLoading, error } = useYoutuber();

  return (
    <Card className="mt-2">
      <Table>
        <TableHeader>
          <TableRow className="grid grid-cols-12 items-center">
            <TableHead className="col-span-4 ml-2">유튜버</TableHead>
            <TableHead className="col-span-4 justify-center ">관심 카테고리</TableHead>
            <TableHead className="col-span-4 justify-end mr-4">메일전송</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && <YoutuberListSkeleton />}
          {/* {error && <p>Error</p>}
      {isLoading && <p>로딩중..</p>} */}
          {youtubers?.length > 0 &&
            youtubers.map((youtuber) => <YoutuberList youtuber={youtuber} key={youtuber.youtuberMemberId} />)}
        </TableBody>
      </Table>
    </Card>
  );
}
