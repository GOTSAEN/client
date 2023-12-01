import React from 'react';
import { TableCell, TableRow } from '../ui/table';
import { Skeleton } from '../ui/skeleton';
import { Avatar } from '../ui/avatar';

export default function YoutuberListSkeleton() {
  const arr = Array.from({ length: 7 }, (_, index) => index);

  return (
    <>
      {arr.map((el) => (
        <YoutuberListItemSkeleton key={el} />
      ))}
    </>
  );
}

function YoutuberListItemSkeleton() {
  return (
    <TableRow className="grid grid-cols-12 px-1 py-2">
      <TableCell className="font-medium col-span-4">
        <Avatar className="mr-4">
          <Skeleton className="w-full h-full" />
        </Avatar>
        <Skeleton className="w-24 h-4" />
      </TableCell>
      <TableCell className="font-medium col-span-4 justify-center">
        <Skeleton className="w-12 h-4" />
      </TableCell>
      <TableCell className="col-span-4 justify-end mr-2">
        <Skeleton className="w-12 h-full" />
      </TableCell>
    </TableRow>
  );
}
