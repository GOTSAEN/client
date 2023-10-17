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
import { Progress } from '@/components/ui/progress'
import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'

export default function PartnerProgressAds() {
  return (
    <>
      <Card className='flex justify-center'>
        <Table>
          <TableHeader>
            <TableRow className='grid grid-cols-12 items-center'>
              <TableHead className='col-span-5'>
                상품
              </TableHead>
              <TableHead className='justify-center col-span-1'>
                카테고리
              </TableHead>

              <TableHead className='justify-center col-span-2'>
                유튜버 수
              </TableHead>
              <TableHead className='text-right col-span-1 justify-center'>
                진행률
              </TableHead>
              <TableHead className='text-center col-span-2 justify-center'>
                종료일
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Link to='campaign/1234'>
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
                <TableCell className='justify-center col-span-1'>
                  맛집
                </TableCell>
                <TableCell className='justify-center col-span-2'>
                  3
                </TableCell>
                <TableCell className='col-span-1 justify-center'>
                  <Progress value={30} className='w-full' />
                </TableCell>
                <TableCell className='text-right right col-span-2 justify-center'>
                  2023-10-22
                </TableCell>
                <TableCell className='text-right right col-span-1 justify-center'>
                  D-13
                </TableCell>
              </TableRow>
            </Link>
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
