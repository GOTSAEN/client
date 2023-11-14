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
import { Card } from '../../../components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { imageSize } from '@/css/image'
export default function PastAds() {
  return (
    <>
      <Card className='flex justify-center'>
        <Table>
          <TableHeader>
            <TableRow className='grid grid-cols-12 items-center'>
              <TableHead className='col-span-5'>
                상품
              </TableHead>

              <TableHead className='text-right justify-center col-span-2'>
                카테고리
              </TableHead>
              <TableHead className='text-center col-span-2 justify-center'>
                URL
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className='grid grid-cols-12 px-1'>
              <TableCell className='font-medium'>
                <img
                  src='https://res.cloudinary.com/testdart/image/upload/v1686622372/lgfjbpyuklur2albx0ht.jpg'
                  alt='thumbnail'
                  className={imageSize}
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

              <TableCell className='col-span-2 justify-center'>
                맛집
              </TableCell>
              <TableCell className='text-right right col-span-2 justify-center'>
                <a
                  target='blank'
                  href='https://www.youtube.com/watch?v=TRauMX-NUYY&ab_channel=TheCHOOM%28%EB%8D%94%EC%B6%A4%29'
                >
                  <Button className='px-2 shrink-0 text-xs'>
                    재생
                  </Button>
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
