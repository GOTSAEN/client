import { fetchAdsById } from '@/api/ads';
import { imageSize } from '@/css/image';
import React from 'react';
import { useQuery } from 'react-query';
import CompactInfoSkeleton from './compact-info-skeleton';

export default function CompactAdInfo({ id }) {
  const { data, isLoading, error } = useQuery(['ads', `${id}`], async () => await fetchAdsById(id).then((res) => res));

  return (
    <section>
      {isLoading && <CompactInfoSkeleton />}
      {data && (
        <div className="flex flex-col gap-2">
          <dd className="flex">
            <img
              loading="lazy"
              src={data?.imageUrls[0] || 'no_image.jpg'}
              alt={data?.productName}
              className={imageSize}
            />
            <h2 className="text-xl font-semibold">{data?.productName}</h2>
          </dd>
          <div className="text-sm">
            <span className="text-muted-foreground mr-1">모집기간</span> {data?.startDate} ~ {data?.endDate}
          </div>
          <p>
            <span className="text-muted-foreground mr-1">모집인원</span> {data?.numberOfRecruit}
          </p>
        </div>
      )}
      <hr className="my-4" />
    </section>
  );
}
