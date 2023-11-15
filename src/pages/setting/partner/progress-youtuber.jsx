import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function ProgressYoutuber() {
  return (
    <>
      <Card className="flex justify-center">
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-8 items-center">
              <TableHead className="col-span-2">유튜버</TableHead>

              <TableHead className="justify-center">구독자</TableHead>
              <TableHead className="text-right justify-center">뷰 수</TableHead>
              <TableHead className="text-right justify-center">좋아요 수</TableHead>

              <TableHead className="text-center justify-center ">링크</TableHead>
              <TableHead className="text-center justify-center col-span-2"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="grid grid-cols-8 hover:cursor-pointer">
              <TableCell className="font-medium col-span-2">
                <img
                  src="https://yt3.ggpht.com/yzOkKjqHaC-vVkeQkz-8HLa5rCAyX0MMPEZy8eD28lALtHDl01PnWoq15xuiVV1j7irToNNH=s88-c-k-c0x00ffffff-no-rj"
                  alt="thumbnail"
                  className="h-[50px] w-[50px] cover block rounded-full m-2"
                />
                갓생돌돌돌돌이
              </TableCell>
              <TableCell className="justify-center">119만명</TableCell>
              <TableCell className="justify-center">77만회</TableCell>
              <TableCell className="justify-center">8.8천</TableCell>
              <TableCell className="text-right right  justify-center">
                <a
                  href="https://www.youtube.com/watch?v=KgsPK4X2BFA&ab_channel=%EC%A4%80%EC%9A%B0"
                  target="blank"
                  className="underline underline-offset-2"
                >
                  조회
                </a>
              </TableCell>
              <TableCell className="text-center justify-center gap-2 col-span-2">
                <Button>확인</Button>
                <Button variant="bright" className="bg-yellow-500">
                  반려
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
