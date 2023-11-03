import { fetchAdsById } from '@/api/ads'
import ImagesFetcher from '@/components/product-detail/imges-fetcher'
import ProductContent from '@/components/product-detail/product-content'
import ProductExplain from '@/components/product-detail/product-explan'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const params = useParams()

  const { data, isLoading, error } = useQuery(
    ['ads', `${params.id}`],
    async () =>
      await fetchAdsById(params.id).then((res) => res)
  )

  return (
    <main className='w-full h-full py-2'>
      {data && (
        <>
          <section className='lg:flex md:flex py-5 px-2'>
            <div className='lg:w-[600px] md:w-[480px] sm:w-full '>
              <ImagesFetcher />
            </div>
            {data && <ProductContent data={data} />}
          </section>
          <hr />
          {data && <ProductExplain data={data} />}
        </>
      )}
    </main>
  )
}
