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
import { usePastAds } from './hooks/use-past-ads'
import EmptyRow from '@/components/common/EmptyRow'
import { imageSize } from '@/css/image'
export default function PartnerPastAds() {
  const [isLoading, ads, error] = usePastAds()
  return (
    <>
      <Card className='flex justify-center'>
        <Table>
          <TableHeader>
            <TableRow className='grid grid-cols-9 items-center'>
              <TableHead className='col-span-5'>
                상품
              </TableHead>

              <TableHead className='text-right justify-center col-span-2'>
                카테고리
              </TableHead>
              <TableHead className='text-center col-span-2 justify-center'>
                참여수
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ads?.length > 0 ? (
              ads.map(
                ({
                  advertisementId,
                  imageUrl,
                  productName,
                  category,
                  numberOfRecruit,
                }) => (
                  <TableRow className='grid grid-cols-9 px-1'>
                    <TableCell className='col-span-4'>
                      <img
                        src={
                          imageUrl
                            ? imageUrl
                            : '/no_img.jpg'
                        }
                        alt='thumbnail'
                        className={imageSize}
                      />

                      <Link
                        to={`product/${advertisementId}`}
                        className='hover:underline underline-offset-2'
                      >
                        {productName}
                      </Link>
                    </TableCell>

                    <TableCell className='col-span-2 justify-center'>
                      {category}
                    </TableCell>
                    <TableCell className='text-right right col-span-2 justify-center'>
                      {numberOfRecruit}
                    </TableCell>
                  </TableRow>
                )
              )
            ) : (
              <EmptyRow mainMessage='종료된 광고가 없습니다😂' />
            )}
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
