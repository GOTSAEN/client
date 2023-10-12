import React, { useEffect, useState } from 'react'
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
import { fetchAdsById, newAds } from '@/api/ads'
import { useNavigate, useParams } from 'react-router-dom'

export default function EnrollForm() {
  const navigate = useNavigate()
  const param = useParams()

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
  const [enrollForm, setEnrollForm] = useState({
    mainTitle: '새 상품 등록',
    button: '작성 완료',
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
    e.stopPropagation()
    newAds(form).then((status) => {
      if (status === 201) {
        console.log(status)
        navigate('/setting/partner/ads/enroll')
      }
    })
  }

  useEffect(() => {
    if (param.campaignId) {
      setEnrollForm({
        mainTitle: '정보 수정',
        button: '수정 완료',
      })
      fetchAdsById(param.campaignId).then((res) => {
        setForm(res)
        console.log(form)
      })
    }
  }, [param])

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
            {enrollForm.mainTitle}
          </CardTitle>
          <Button>{enrollForm.button}</Button>
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
              categories.map(({ categoryName }) => (
                <SelectItem
                  value={categoryName}
                  key={categoryName}
                >
                  {categoryName}
                </SelectItem>
              ))}
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
