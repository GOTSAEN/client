import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getAllYoutuberList, getYoutuberByCategory } from '@/api/youtuber';
import { Card } from '@/components/ui/card';
import YoutuberList from '@/components/youtuber/youtuber-list';

import YoutuberListSkeleton from '@/components/youtuber/youtuber-list-skeleton';
import useYoutuber from './use-youtuber';
import EmptyRow from '../common/EmptyRow';
export default function YoutuberTable({ page, category }) {
  const { isLoading, youtubers, error } = useYoutuber(page, category);

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
          {error && <p>Error</p>}

          {youtubers?.length > 0 &&
            youtubers.map((youtuber) => <YoutuberList youtuber={youtuber} key={youtuber.youtuberMemberId} />)}
          {youtubers?.length === 0 && <EmptyRow mainMessage={'조회가능 한 유튜버가 없어요😢'} />}
        </TableBody>
      </Table>
    </Card>
  );
}
