import React, { useState } from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { cn } from '@/utils/lib'
import { DatePicker } from '../common/DatePicker'
import { Label } from '../ui/label'
import TextEditor from '../common/TextEditor'
import { Button } from '@/components/ui/button'
import ImageUploader from '../common/ImageUploader'
import { useQuery } from 'react-query'
import { fetchCategories } from '@/api/categories'
import { newAds } from '@/api/ads'
import { useNavigate } from 'react-router-dom'

export default function EnrollForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    productName: '',
    numberOfRecruit: 1,
    startDate: '',
    endDate: '',
    category: '',
    offer: '',
    productDescription: '',
    precaution: '',
  })

  const {
    isLoading,
    data: categories,
    error,
  } = useQuery(
    ['categories'],
    async () => await fetchCategories().then((res) => res),
    { staleTime: 1000 * 60 * 24 }
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleDataChange = (name, value) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    newAds(form).then((status) => {
      if (status === 201) {
        navigate('/setting/ads/enroll')
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={cn('p-4 flex flex-col gap-2 border-0')}
      >
        <CardHeader
          className={cn(
            'px-1 flex-row items-end justify-between'
          )}
        >
          <CardTitle className={cn('text-lg')}>
            상품 등록
          </CardTitle>
          <Button>작성 완료</Button>
        </CardHeader>

        <Input
          placeholder='상품명'
          name='productName'
          value={form.productName}
          onChange={handleChange}
        />
        <Input
          placeholder='모집인원'
          type='number'
          name='numberOfRecruit'
          onChange={handleChange}
          value={form.numberOfRecruit}
        />
        <div className='flex gap-2'>
          <DatePicker
            placeholder='시작날짜'
            name='startDate'
            value={form.startDate}
            onChange={handleDataChange}
          />
          <DatePicker
            placeholder='종료날짜'
            name='endDate'
            value={form.endDate}
            onChange={handleDataChange}
          />
        </div>
        <Select
          onValueChange={(val) =>
            handleDataChange('category', val)
          }
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='-- 카테고리 --' />
          </SelectTrigger>
          <SelectContent>
            {categories &&
              categories.map(
                ({ categoryName, categoryId }) => (
                  <SelectItem
                    value={categoryName}
                    key={categoryId}
                  >
                    {categoryName}
                  </SelectItem>
                )
              )}
          </SelectContent>
        </Select>
        <Input
          placeholder='제공 내용 50자 내외'
          type='text'
          name='offer'
          value={form.offer}
          onChange={handleChange}
        />
        <ImageUploader />
        <div className='py-2'>
          <Label
            htmlFor='explain'
            className={cn('text-md my-2 block')}
          >
            🎁상품 설명
          </Label>
          <TextEditor
            name='productDescription'
            value={form.productDescription}
            onChange={handleDataChange}
          />
        </div>
        <div className='py-2'>
          <Label
            htmlFor='explain'
            className={cn('text-md my-2 block')}
          >
            ✅ 주의 사항
          </Label>
          <TextEditor
            name='precaution'
            value={form.precaution}
            onChange={handleDataChange}
          />
        </div>
      </div>
    </form>
  )
}
