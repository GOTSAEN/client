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
import { Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query'
import { fetchPartnerAds } from '@/api/members/ads'
import { deleteAds } from '@/api/ads'

export default function PartnerWaitingAds() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
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

  const { mutate } = useMutation(
    async (id) => await deleteAds(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          'partner',
          'ads',
          'waiting',
        ])
      },
    }
  )

  const handleUpdate = (e, id) => {
    e.stopPropagation()
    navigate(`/product/update/campaign/${id}`)
  }

  return (
    <>
      <Card className='flex justify-center min-h-[250px]'>
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
                신청자 / 모집인원
              </TableHead>

              <TableHead className='text-center col-span-2 justify-center'>
                마감일
              </TableHead>
              <TableHead className='text-center col-span-2 justify-center'></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {error && <p>Error</p>}
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
                  className='grid grid-cols-12 px-1 hover:cursor-pointer'
                  onClick={() => console.log('click')}
                  key={ad.advertisementId}
                >
                  <TableCell
                    className='font-medium col-span-4'
                    onClick={() =>
                      navigate(
                        `/product/${ad.advertisementId}`
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
                  <TableCell className='col-span-2 justify-center gap-2'>
                    <Button
                      onClick={(e) =>
                        handleUpdate(e, ad.advertisementId)
                      }
                    >
                      <Pencil size={14} />
                    </Button>
                    <Button
                      variant='destructive'
                      onClick={() =>
                        mutate(ad.advertisementId)
                      }
                    >
                      <Trash2 size={14} />
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