import { fetchAdsById } from '@/api/ads';
import ImagesFetcher from '@/components/product-detail/imges-fetcher';
import ProductContent from '@/components/product-detail/product-content';
import ProductDetailSkeleton from '@/components/product-detail/product-detail-skeleton';
import ProductExplain from '@/components/product-detail/product-explan';
import React from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

export default function ProductDetail() {
  const id = useSearchParams()[0].get('id');

  const { data, isLoading, error } = useQuery(['ads', `${id}`], async () => await fetchAdsById(id).then((res) => res));

  return (
    <main className="w-full h-full py-2 lg:px-[60px]">
      {isLoading && <ProductDetailSkeleton />}
      {data && (
        <>
          <section className="lg:flex  md:flex py-5 px-2">
            <div className="lg:w-[50%] lg:mr-4 md:mr-4 md:w-[50%] sm:w-full aspect-1">
              <ImagesFetcher images={data.imageUrls} />
            </div>
            <ProductContent data={data} />
          </section>
          <hr />
          <ProductExplain data={data} />
        </>
      )}
    </main>
  );
}
