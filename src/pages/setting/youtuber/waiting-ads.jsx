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
import { Card } from '../../../components/ui/card'
import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function WaitingAds() {
  return (
    <>
      <Card className='flex justify-center'>
        <Table>
          <TableHeader>
            <TableRow className='grid grid-cols-12 items-center'>
              <TableHead className='col-span-4'>
                상품
              </TableHead>
              <TableHead className='justify-center col-span-2'>
                카테고리
              </TableHead>
              <TableHead className='justify-center col-span-2'>
                상태
              </TableHead>

              <TableHead className='text-center col-span-2 justify-center'>
                신청일
              </TableHead>
              <TableHead className='text-center col-span-2 justify-center'></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className='grid grid-cols-12 px-1'>
              <TableCell className='col-span-4'>
                <img
                  src='https://res.cloudinary.com/testdart/image/upload/v1686622372/lgfjbpyuklur2albx0ht.jpg'
                  alt='thumbnail'
                  className='h-[50px] w-[50px] cover block rounded'
                />
                <Link
                  to='/product/1234'
                  className='hover:underline underline-offset-2 px-2'
                >
                  [강남]서도촌 맛있는 돼지갈비/양념갈비
                </Link>
              </TableCell>
              <TableCell className='justify-center col-span-2'>
                맛집
              </TableCell>
              <TableCell className='justify-center col-span-2'>
                확인중
              </TableCell>
              <TableCell className='text-right right col-span-2 justify-center'>
                <a
                  target='blank'
                  href='https://www.youtube.com/watch?v=TRauMX-NUYY&ab_channel=TheCHOOM%28%EB%8D%94%EC%B6%A4%29'
                >
                  2023-09-08
                </a>
              </TableCell>
              <TableCell className='col-span-2 justify-center gap-2'>
                <Button onClick={() => {}}>
                  <Trash2 size={14} />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
