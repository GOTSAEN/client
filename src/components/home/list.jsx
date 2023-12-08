import React, { useEffect, useState } from 'react';
import AdsCard from '@/components/AdsCard';
import { useQuery } from 'react-query';
import { fetchAdsByStatus } from '@/api/ads';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveUserSession } from '@/service/login-auth';
import { Cookies } from 'react-cookie';
import { useAuth } from '@/context/AuthContext';

export default function List() {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const {
    isLoading,
    data: ads,
    error,
  } = useQuery(['ads', 'waiting'], async () => await fetchAdsByStatus('WAITING', page).then((res) => res), {
    staleTime: 1000 * 60 * 30,
  });
  useEffect(() => {
    if (location.search.includes('?')) {
      const urlSearchParams = new URLSearchParams(location.search.split('?')[1]);

      const authorization = urlSearchParams.get('Access_token');
      const email = urlSearchParams.get('Email');
      const usertype = urlSearchParams.get('UserType');
      const cookie = cookies.get('Refresh');

      saveUserSession(
        {
          authorization,
          usertype,
        },
        { email }
      );
    }
  }, [location]);

  return (
    <section className="grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 gap-4 py-2">
      {ads?.length > 0 && ads.map((ad) => <AdsCard key={ad.advertisementId} adsCardInfo={ad} />)}
    </section>
  );
}
