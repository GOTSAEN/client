import React from 'react'
import { Heart } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/utils/lib'

export default function ProductContent({ data }) {
  const {
    title,
    startDt,
    endDt,
    collect,
    enroll,
    partner,
    category,
    short,
  } = data

  const label_style = 'font-semibold inline-block mr-4'
  return (
    <article className='px-4 grow flex flex-col'>
      <div>
        <h2 className='flex text-xl font-semibold items-center mb-8'>
          <Heart className='mr-2' />
          {title}
        </h2>
        <aside>
          <label className={label_style}>모집기간</label>
          <span>
            {startDt} ~ {endDt}
          </span>
        </aside>
        <aside>
          <label className={label_style}>
            모집인원/신청인원
          </label>
          <span>
            {collect} / {enroll}
          </span>
        </aside>
        <aside>
          <label className={label_style}>업체명</label>
          <span>{partner}</span>
        </aside>
        <aside>
          <label className={label_style}>카테고리</label>
          <span>
            {category.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </span>
        </aside>
        <aside>
          <label className={label_style}>모집기간</label>
          <span>
            {startDt} ~ {endDt}
          </span>
        </aside>
      </div>
      <div className='pt-8'>
        <hr />
      </div>
      <div className='flex flex-col grow justify-between'>
        <aside className='py-8'>{short}</aside>
        <Button className={cn('w-full')}>대기 신청</Button>
      </div>
    </article>
  )
}
