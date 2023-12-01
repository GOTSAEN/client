import React from 'react';
import { Skeleton } from '../ui/skeleton';
import { TableRow } from '../ui/table';

export default function AdItemSkeleton({ type }) {
  return (
    <>
      <TableRow className="flex flex-row gap-2 p-2 items-center">
        <Skeleton className={`h-[50px] w-[50px] shrink-0 ${type ?? 'rounded'}`} />
        <Skeleton className="h-4 basis-2/4" />
        <Skeleton className="h-4 basis-1/4" />
        <Skeleton className="h-4 basis-1/4" />
      </TableRow>
      <TableRow className="flex flex-row gap-2 p-2 items-center">
        <Skeleton className={`h-[50px] w-[50px] shrink-0 ${type ?? 'rounded'}`} />
        <Skeleton className="h-4 basis-2/4" />
        <Skeleton className="h-4 basis-2/4" />
        <Skeleton className="h-4 basis-1/4" />
      </TableRow>
      <TableRow className="flex flex-row gap-2 p-2 items-center">
        <Skeleton className={`h-[50px] w-[50px] shrink-0 ${type ?? 'rounded'}`} />
        <Skeleton className="h-4 basis-2/4" />
        <Skeleton className="h-4 basis-1/4" />
        <Skeleton className="h-4 basis-2/4" />
      </TableRow>
    </>
  );
}
