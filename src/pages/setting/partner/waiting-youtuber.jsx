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
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useProgressAds } from './hooks/use-progress-ads'
import { useWaitingYoutuber } from './hooks/use-waiting-youtuber'
import EmptyRow from '@/components/common/EmptyRow'

export default function WaitingYoutuber() {
  const params = useParams()
  const [isLoading, youtubers, error, updateStatus] =
    useWaitingYoutuber()

  const handleChangeStatus = (id, data) => {
    console.log(data)
    updateStatus.mutateAsync(id, data)
  }
  return (
    <>
      <Card className='flex justify-center'>
        <Table>
          <TableHeader>
            <TableRow className='grid grid-cols-8 items-center'>
              <TableHead className='col-span-2'>
                유튜버
              </TableHead>

              <TableHead className='justify-center'>
                구독자
              </TableHead>
              <TableHead className='text-right justify-center'>
                뷰 수
              </TableHead>

              <TableHead className='text-center justify-center col-span-2 '>
                신청일
              </TableHead>
              <TableHead className='text-center justify-center col-span-2'></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {youtubers?.length > 0 ? (
              youtubers.map(
                ({
                  applicationId,
                  status,
                  createdAt,
                  youtubeMemberImage,
                  youtubeMemberNickname,
                }) => (
                  <TableRow className='grid grid-cols-8 hover:cursor-pointer'>
                    <TableCell className='font-medium col-span-2'>
                      <img
                        src={youtubeMemberImage}
                        className='h-[40px] w-[40px] cover block rounded-full m-2'
                      />
                      {youtubeMemberNickname}
                    </TableCell>
                    <TableCell className='justify-center'>
                      119만명
                    </TableCell>
                    <TableCell className='justify-center'>
                      77만회
                    </TableCell>

                    <TableCell className='col-span-2 text-right right  justify-center'>
                      {createdAt?.slice(0, 10)}
                    </TableCell>
                    <TableCell className='text-center justify-center gap-2 col-span-2'>
                      {status === 'WAITING' && (
                        <>
                          <Button
                            onClick={() =>
                              handleChangeStatus(
                                applicationId,
                                { status: 'PROGRESS' }
                              )
                            }
                          >
                            확정
                          </Button>
                          <Button
                            variant='bright'
                            className='bg-yellow-500'
                            onClick={() =>
                              handleChangeStatus(
                                applicationId,
                                { status: 'REJECTION' }
                              )
                            }
                          >
                            반려
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                )
              )
            ) : (
              <EmptyRow mainMessage='유튜버를 모집중 입니다😂' />
            )}
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
