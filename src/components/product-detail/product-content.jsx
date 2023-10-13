import React from 'react'
import { Heart } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/utils/lib'

export default function ProductContent({ data }) {
  const {
    productName,
    startDate,
    endDate,
    numberOfRecruit,
    category,
    offer,
  } = data

  console.log(productName)

  const label_style = 'font-semibold inline-block mr-4'
  return (
    <article className='px-4 grow flex flex-col'>
      <div>
        <h2 className='flex text-xl font-semibold items-center mb-8'>
          <Heart className='mr-2' />
          {productName}
        </h2>
        <aside>
          <label className={label_style}>모집기간</label>
          <span>
            {startDate} ~ {endDate}
          </span>
        </aside>
        <aside>
          <label className={label_style}>
            신청인원 / 모집인원
          </label>
          <span>7 / {numberOfRecruit}</span>
        </aside>
        <aside>
          <label className={label_style}>업체명</label>
          <span>김포페</span>
        </aside>
        <aside>
          <label className={label_style}>카테고리</label>
          <span>{category}</span>
        </aside>
      </div>
      <div className='py-4'>
        <hr />
      </div>
      <div className='flex flex-col grow justify-between'>
        <label className={label_style}>제공내용</label>
        <aside className='py-4'>{offer}</aside>
        <Button className={cn('w-full')}>대기 신청</Button>
      </div>
    </article>
  )
}
