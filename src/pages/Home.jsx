import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import AdsCard from '@/components/AdsCard'
import { useQuery } from 'react-query'
import { fetchAds } from '@/api/ads'
import qs from 'qs'

export default function Home({ history, location }) {
  const authUri = 'https://youad.store:3000/client'
  const {
    isLoading,
    data: ads,
    error,
  } = useQuery(
    ['ads', 'all'],
    async () => await fetchAds().then((res) => res),
    {
      staleTime: 1000 * 60 * 30,
    }
  )
  useEffect(() => {
    const getToken = async () => {
      console.log(location)
      const { code } = qs.parse(location?.search, {
        ignoreQueryPrefix: true,
      })

      try {
        const response = await fetch(
          `${authUri}?code=${code}`
        )
        console.log('response', response)
        const data = await response.json()

        localStorage.setItem('token', data.jwt)
        localStorage.setItem('ProfileURL', data.avatar_url)

        history.push('/')
      } catch (error) {}
    }

    getToken()
  }, [location, history])

  return (
    <section>
      {ads?.length > 0 &&
        ads.map((ad) => (
          <AdsCard
            key={ad.advertisementId}
            adsCardInfo={ad}
          />
        ))}
    </section>
  )
}
