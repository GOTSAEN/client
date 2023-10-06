import { Button } from '@/components/ui/button'
import React from 'react'
import AdsCard from '@/components/AdsCard'

export default function Home() {
  const ads = [
    {
      id: 0,
      image: 'https://placehold.co/300x170',
      title: '제품 1',
      category: '카테고리 A',
    },
    {
      id: 1,
      image: 'https://placehold.co/300x170',
      title: '제품 2',
      category: '카테고리 B',
    },
    {
      id: 2,
      image: 'https://placehold.co/300x170',
      title: '제품 3',
      category: '카테고리 C',
    },
  ]

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {ads.map((ad) => (
        <AdsCard key={ad.id} adsCardInfo={ad} />
      ))}
    </section>
  )
}
