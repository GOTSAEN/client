import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/utils/lib';
import React, { useEffect, useState } from 'react';
import { getUserType, saveUserType } from '@/service/login-auth';
import { auth_form } from '@/css';
import YoutuberLogin from './login/youtuber-login';
import AdvertiserLogin from './login/advertiser-login';

export default function LogIn() {
  const [auth, setAuth] = useState('');
  useEffect(() => {
    getUserType() ? setAuth(getUserType()) : setAuth('youtuber');
  }, []);

  return (
    <section className="main flex justify-center items-center">
      {auth && (
        <Tabs defaultValue={auth} className={auth_form}>
          <TabsList className={cn('grid w-full grid-cols-2')}>
            <TabsTrigger value="youtuber" onClick={() => saveUserType('youtuber')}>
              유튜버
            </TabsTrigger>
            <TabsTrigger value="advertisement" onClick={() => saveUserType('advertisement')}>
              광고주
            </TabsTrigger>
          </TabsList>
          <YoutuberLogin />
          <AdvertiserLogin />
        </Tabs>
      )}
    </section>
  );
}
