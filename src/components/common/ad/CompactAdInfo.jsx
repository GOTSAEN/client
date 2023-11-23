import { fetchAdsById } from '@/api/ads';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export default function CompactAdInfo({ id }) {
  console.log(id);
  const { data, isLoading, error } = useQuery(['ads', `${id}`], async () => await fetchAdsById(id).then((res) => res));

  return (
    <section>
      <h2>{data?.productName}</h2>
    </section>
  );
}
