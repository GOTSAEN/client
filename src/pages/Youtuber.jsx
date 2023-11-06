import { getAllYoutuberList } from '@/api/youtuber'
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
      {youtubers?.length > 0 &&
        youtubers.map((youtuber) => (
          <YoutuberList youtuber={youtuber} />
        ))}
    </main>
  )
}
