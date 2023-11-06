import { getAllYoutuberList } from '@/api/youtuber'
import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import YoutuberList from '@/components/youtuber/youtuber-list'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

export default function Youtuber() {
  const [page, setPage] = useState(1)
  const {
    isLoading,
    data: youtubers,
    error,
  } = useQuery(
    ['youtuber'],
    async () =>
      await getAllYoutuberList(page).then((res) => res),
    {
      staleTime: 1000 * 60 * 30,
    }
  )
  return (
    <main>
      <Card>
        <Table>
          <TableHeader>
            <TableRow className='grid grid-cols-12 items-center'>
              <TableHead className='col-span-4 ml-2'>
                닉네임
              </TableHead>
              <TableHead className='col-span-4 justify-center '>
                카테고리
              </TableHead>
              <TableHead className='col-span-4 justify-end mr-4'>
                문의하기
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {error && <p>Error</p>}
            {isLoading && <p>로딩중..</p>}
            {youtubers?.length > 0 ? (
              youtubers.map((youtuber) => (
                <YoutuberList youtuber={youtuber} />
              ))
            ) : (
              <p className='min-h-[200px] flex justify-center items-center'>
                회원가입 한 유튜버가 없어요😢
              </p>
            )}
          </TableBody>
        </Table>
      </Card>
    </main>
  )
}
