import React, { useEffect } from 'react'
import AdsCard from '@/components/AdsCard'
import { useQuery } from 'react-query'
import { fetchAds } from '@/api/ads'
import qs from 'qs'
import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'
import { saveUserSession } from '@/service/login-auth'
import { Cookies } from 'react-cookie'
import { useAuth } from '@/context/AuthContext'

export default function Home() {
  const { login } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const cookies = new Cookies()
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
    if (location.search.includes('?')) {
      const urlSearchParams = new URLSearchParams(
        location.search.split('?')[1]
      )

      const authorization =
        urlSearchParams.get('Access_token')
      const email = urlSearchParams.get('Email')
      const usertype = urlSearchParams.get('UserType')
      const cookie = cookies.get('Refresh')

      saveUserSession(
        {
          authorization,
          usertype,
        },
        { email }
      )
    }
  }, [location])

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
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
