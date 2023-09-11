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
import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'

export default function ProgressYoutuber() {
  return (
    <Card className='flex justify-center'>
      <Table>
        <TableHeader>
          <TableRow className='grid grid-cols-12 items-center'>
            <TableHead className='col-span-5'>
              유튜버
            </TableHead>

            <TableHead className='justify-center col-span-2'>
              구독자
            </TableHead>
            <TableHead className='text-right col-span-3 justify-center'>
              뷰 수
            </TableHead>
            <TableHead className='text-right col-span-3 justify-center'></TableHead>
            <TableHead className='text-center col-span-2 justify-center'>
              링크
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className='grid grid-cols-12 px-1 hover:cursor-pointer'>
            <TableCell className='font-medium'>
              <img
                src='https://res.cloudinary.com/testdart/image/upload/v1686622372/lgfjbpyuklur2albx0ht.jpg'
                alt='thumbnail'
                className='h-[50px] w-[50px] cover block rounded'
              />
            </TableCell>
            <TableCell className='col-span-4'>
              <Link
                to='/product/1234'
                className='hover:underline underline-offset-2'
              >
                [강남]서도촌 맛있는 돼지갈비/양념갈비
              </Link>
            </TableCell>
            <TableCell className='justify-center col-span-2'>
              7
            </TableCell>
            <TableCell className='col-span-3 justify-center'>
              500,000
            </TableCell>
            <TableCell className='text-right right col-span-2 justify-center'>
              <a
                target='blank'
                href='https://www.youtube.com/watch?v=TRauMX-NUYY&ab_channel=TheCHOOM%28%EB%8D%94%EC%B6%A4%29'
              >
                2023-09-08
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}
