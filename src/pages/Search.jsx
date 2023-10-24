import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useQuery } from 'react-query'
import { fetchByKeyword } from '@/api/search'
import AdsCard from '@/components/AdsCard'
import { fetchPartnerAds } from '@/api/members/ads'
export default function SearchPage() {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const keyword = params.get('keyword')

  const { isLoading, data, error } = useQuery(
    ['search', keyword],
    async () =>
      await fetchByKeyword(keyword).then((res) => {
        console.log(res)
        return res
      }),
    {
      staleTime: 1000 * 60 * 24,
    }
  )
  useEffect(() => {
    console.log('object')
  }, [keyword])
  return (
    <main>
      {isLoading && <p> loading </p>}
      {error && <p> error </p>}
      <div className='py-2 flex items-end'>
        <h2 className='text-xl flex items-center w-fit bg-muted py-2 px-4'>
          <Search size={20} className='mr-2' />
          {keyword}
        </h2>
        <p className='text-muted-foreground text-sm p-2 w-fit'>
          총 {data?.pageInfo.totalElements}개의 결과
        </p>
      </div>

      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2'>
        {data?.data.length ? (
          data.data?.map((ads) => (
            <AdsCard
              adsCardInfo={ads}
              key={ads.advertisementId}
            />
          ))
        ) : (
          <p className='py-12 text-center '>
            해당 키워드로 검색된 결과가 없습니다🥲
          </p>
        )}
      </section>
    </main>
  )
}
