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
import LocationLabel from '@/components/setting/location-label'

export default function PartnerWaitingAds() {
  return (
    <>
      <LocationLabel labels={['광고 관리', '등록 광고']} />
      <Card className='flex justify-center'>
        <Table>
          <TableHeader>
            <TableRow className='grid grid-cols-11 items-center'>
              <TableHead className='col-span-4'>
                상품
              </TableHead>

              <TableHead className='justify-center col-span-2'>
                카테고리
              </TableHead>
              <TableHead className='justify-center col-span-2'>
                신청자 / 모집인원
              </TableHead>

              <TableHead className='text-center col-span-2 justify-center'>
                마감일
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Link to='campaign/1234'>
              <TableRow className='grid grid-cols-11 px-1 hover:cursor-pointer'>
                <TableCell className='font-medium'>
                  <img
                    src='https://res.cloudinary.com/testdart/image/upload/v1686622372/lgfjbpyuklur2albx0ht.jpg'
                    alt='thumbnail'
                    className='h-[50px] w-[50px] cover block rounded'
                  />
                </TableCell>
                <TableCell className='col-span-3'>
                  <Link
                    to='/product/1234'
                    className='hover:underline underline-offset-2'
                  >
                    [강남]서도촌 맛있는 돼지갈비/양념갈비
                  </Link>
                </TableCell>
                <TableCell className='justify-center col-span-2'>
                  맛집
                </TableCell>
                <TableCell className='justify-center col-span-2'>
                  7 / 3
                </TableCell>

                <TableCell className='text-right right col-span-2 justify-center'>
                  2023-10-18
                </TableCell>
                <TableCell className='text-right right col-span-1 justify-center'>
                  D-3
                </TableCell>
              </TableRow>
            </Link>
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
