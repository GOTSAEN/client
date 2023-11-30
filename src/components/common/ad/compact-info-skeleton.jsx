import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export default function CompactInfoSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <dd className="flex gap-2">
        <Skeleton className="w-[50px] h-[50px]" />
        <Skeleton className="w-24 h-6" />
      </dd>
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-4 w-24" />
    </div>
  );
}
