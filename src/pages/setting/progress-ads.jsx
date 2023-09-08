import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/utils/lib'
import { Card } from '../../components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ProgressAds() {
  return (
    <Card className='flex justify-center'>
      <Table>
        <TableHeader>
          <TableRow className='grid grid-cols-12 items-center'>
            <TableHead className='col-span-5'>
              상품
            </TableHead>
            <TableHead className='text-right col-span-2 justify-center'>
              포인트
            </TableHead>
            <TableHead className='text-center col-span-5 '>
              URL
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className='grid grid-cols-12'>
            <TableCell className='font-medium'>
              <img
                src='https://res.cloudinary.com/testdart/image/upload/v1686622372/lgfjbpyuklur2albx0ht.jpg'
                alt='thumbnail'
                className='h-[50px] w-[50px] cover block rounded'
              />
            </TableCell>
            <TableCell className='col-span-4'>
              [강남]서도촌 맛있는 돼지갈비/양념갈비
            </TableCell>

            <TableCell className='col-span-2 justify-center'>
              500,000
            </TableCell>
            <TableCell className='text-right right col-span-5 justify-center gap-1'>
              <Input />
              <Button className='w-[50px] text-[11px] px-2'>
                확정
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}
