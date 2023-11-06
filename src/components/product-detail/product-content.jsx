import React from 'react'
import { Heart } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/utils/lib'
import { useMutation } from 'react-query'
import { enrollWaiting } from '@/api/application'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Cookies } from 'react-cookie'
export default function ProductContent({ data }) {
  const cookie = new Cookies()
  const param = useParams()
  const {
    productName,
    startDate,
    endDate,
    numberOfRecruit,
    category,
    offer,
  } = data

  const label_style = 'font-semibold inline-block mr-4'

  const enrollAd = useMutation(
    async () => await enrollWaiting(param.id),
    {
      onSuccess: () => {
        toast.success('신청완료 되었습니다👍🏻')
      },
      onError: (e) => {
        console.log(e)
      },
    }
  )
  const handleEnroll = () => {
    enrollAd.mutateAsync()
  }
  return (
    <article className='px-4 grow flex flex-col'>
      <div>
        <h2 className='flex text-xl font-semibold items-center mt-2 mb-6'>
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
          <label className={label_style}>모집인원</label>
          <span>{numberOfRecruit} 명</span>
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
        <div>
          <label className={label_style}>제공내용</label>
          <aside className='py-4'>{offer}</aside>
        </div>
        {cookie.get('User') === 'youtuber' && (
          <Button
            className={cn('w-full')}
            onClick={handleEnroll}
          >
            대기 신청
          </Button>
        )}
      </div>
    </article>
  )
}
