import React from 'react'
import qs from 'qs'
import { useLocation } from 'react-router-dom'
export default function Search() {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const keyword = params.get('keyword')
  console.log(keyword)

  return (
    <section>
      <h2>
        🔎<span>{keyword}</span>로 검색한 결과
      </h2>
    </section>
  )
}
