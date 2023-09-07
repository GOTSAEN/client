import React, { useState } from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Form, FormField, FormItem } from '../ui/form'
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
import { Button } from '../ui/button'

export default function EnrollForm() {
  const [form, setForm] = useState({})

  const categories = [
    { id: 14, name: '맛집' },
    { id: 80, name: '뷰티' },
    { id: 29, name: '전자기기' },
    { id: 13, name: '기타' },
  ]

  const handleChange = (e) => {
    console.log(e)
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    console.log(form)
  }

  const handleDataChange = (name, value) => {
    setForm({ ...form, [name]: value })
    console.log(form)
  }

  return (
    <Card
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
        name='productNm'
        value={form.productNm}
        onChange={handleChange}
      />
      <Input
        placeholder='모집인원'
        type='number'
        name='amount'
        value={form.amount}
      />
      <div className='flex gap-2'>
        <DatePicker
          placeholder='시작날짜'
          name='startDt'
          value={form.startDt}
          onChange={handleDataChange}
        />
        <DatePicker
          placeholder='종료날짜'
          name='endDt'
          value={form.endDt}
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
          {categories.map((category) => (
            <SelectItem
              value={category.name}
              key={category.id}
            >
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input placeholder='제공 내용 50자 내외' />
      <div className='py-2'>
        <Label
          htmlFor='explain'
          className={cn('text-md my-2 block')}
        >
          🎁상품 설명
        </Label>
        <TextEditor />
      </div>
      <div className='py-2'>
        <Label
          htmlFor='explain'
          className={cn('text-md my-2 block')}
        >
          ✅ 주의 사항
        </Label>
        <TextEditor />
      </div>
    </Card>
  )
}
