import { getAllYoutuberList } from '@/api/youtuber'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

export default function Youtuber() {
  const [page, setPage] = useState(1)
  const { isLoading, data, error } = useQuery(
    ['youtuber', 'all'],
    async () =>
      await getAllYoutuberList(page).then((res) => res),
    { staleTime: 1000 * 60 * 30 }
  )
  return <main>유튜버 리스트가 올거</main>
}
