import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/utils/lib';
import { Card } from '../../../components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { imageSize } from '@/css/image';
import { link_text } from '@/css';

export default function ProgressAds() {
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
            <TableRow className="grid grid-cols-12 px-1">
              <TableCell className="font-medium">
                <img
                  src="https://res.cloudinary.com/testdart/image/upload/v1686622372/lgfjbpyuklur2albx0ht.jpg"
                  alt="thumbnail"
                  className={imageSize}
                />
              </TableCell>
              <TableCell className="col-span-4">
                <Link to="/product/1234" className={link_text}>
                  [강남]서도촌 맛있는 돼지갈비/양념갈비
                </Link>
              </TableCell>

              <TableCell className="col-span-2 justify-center">맛집</TableCell>
              <TableCell className="text-right right col-span-5 justify-center gap-1">
                <Input />
                <Button className="w-[50px] text-[11px] px-2">확정</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
