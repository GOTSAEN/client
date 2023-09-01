import ImagesFetcher from '@/components/product-detail/imges-fetcher'
import ProductContent from '@/components/product-detail/product-content'
import React from 'react'

export default function ProductDetail() {
  const product = {
    title: '[경기 남양] 쭈꾸미 한판 화도점',
    startDt: '2023-09-01',
    endDt: '2023-09-30',
    collect: 5,
    enroll: 17,
    partner: '쭈꾸미 한판 화도점',
    category: ['맛집', '음식'],
    short: '전 메뉴 중 1 - 제공',
  }
  return (
    <main className='w-full h-full py-2'>
      <section className='lg:flex md:flex'>
        <div className='lg:w-[600px] md:w-[480px] sm:w-full '>
          <ImagesFetcher />
        </div>
        <ProductContent data={product} />
      </section>
    </main>
  )
}
