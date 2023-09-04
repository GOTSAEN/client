import React from 'react'
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

export default function EnrollForm() {
  const form = {
    defaultValues: {
      username: '',
    },
  }

  const categories = [
    { id: 14, name: '맛집' },
    { id: 80, name: '뷰티' },
    { id: 29, name: '전자기기' },
    { id: 13, name: '기타' },
  ]

  return (
    <Card className={cn('p-4 flex flex-col gap-2')}>
      <CardHeader className={cn('px-1')}>
        <CardTitle className={cn('text-lg')}>
          상품 등록
        </CardTitle>
      </CardHeader>
      <Input placeholder='상품명' />
      <Input placeholder='모집인원' />
      <div className='flex gap-2'>
        <DatePicker placeholder='시작날짜' />
        <DatePicker placeholder='종료날짜' />
      </div>
      <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='카테고리' />
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
        <Label htmlFor='explain' className={cn('text-md')}>
          🎁상품 설명
        </Label>
        <TextEditor />
      </div>
      <div className='py-2'>
        <Label htmlFor='explain' className={cn('text-md')}>
          ✅ 주의 사항
        </Label>
        <TextEditor />
      </div>
    </Card>
  )
}
