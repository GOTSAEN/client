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
import { Link, useNavigate } from 'react-router-dom'
import LocationLabel from '@/components/setting/location-label'
import { Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useQuery } from 'react-query'
import { fetchPartnerAds } from '@/api/members/ads'

export default function PartnerWaitingAds() {
  const navigate = useNavigate()
  const {
    isLoading,
    data: ads,
    error,
  } = useQuery(
    ['partner', 'ads', 'waiting'],
    async () =>
      await fetchPartnerAds(1, 'WAITING').then(
        (res) => res.data.data
      ),
    {
      staleTime: 1000 * 60 * 24,
    }
  )

  const handleUpdate = (e, id) => {
    e.stopPropagation()
    navigate(`/product/update/campaign/${id}`)
  }

  const handleMoveProduct = (e, id) => {
    e.preventDefault()
    navigate(`/product/${id}`)
  }
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
            {ads?.length === 0 && (
              <p className='px-2 py-4 text-center'>
                등록된 광고가 없습니다🥲{' '}
                <Link
                  className='hover:text-cyan-700'
                  to={'/product/create'}
                >
                  새 광고
                </Link>
                를 등록해보세요 !
              </p>
            )}
            {ads?.length > 0 &&
              ads.map((ad) => (
                <TableRow
                  className='grid grid-cols-11 px-1 hover:cursor-pointer'
                  onClick={() => console.log('click')}
                  key={ad.advertisementId}
                >
                  <TableCell
                    className='font-medium col-span-4'
                    onClick={(e) =>
                      handleMoveProduct(
                        e,
                        ad.advertisementId
                      )
                    }
                  >
                    <img
                      src={
                        ad.imageUrl
                          ? ad.imageUrl
                          : 'https://res.cloudinary.com/testdart/image/upload/v1686622372/lgfjbpyuklur2albx0ht.jpg'
                      }
                      alt='thumbnail'
                      className='h-[50px] w-[50px] cover block rounded'
                    />
                    <span className='hover:underline underline-offset-2 px-2'>
                      {ad.productName}
                    </span>
                  </TableCell>

                  <TableCell className='justify-center col-span-2'>
                    {ad.category}
                  </TableCell>
                  <TableCell className='justify-center col-span-2'>
                    {ad.numberOfApplicants} /{' '}
                    {ad.numberOfRecruit}
                  </TableCell>

                  <TableCell className='text-right right col-span-2 justify-center'>
                    {ad.endDate}
                  </TableCell>
                  <TableCell className='text-right right col-span-1 justify-center'>
                    <Button
                      onClick={(e) =>
                        handleUpdate(e, ad.advertisementId)
                      }
                    >
                      <Pencil size={12} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
