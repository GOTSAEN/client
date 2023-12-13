import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/utils/lib';
import { TabsContent } from '@radix-ui/react-tabs';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const YoutuberLogin = memo(() => {
  return (
    <TabsContent value="youtuber">
      <Card className={cn('flex justify-center items-center min-h-[300px] px-10 shadow-lg')}>
        <Button className={cn('w-full')}>
          <Link to="http://ec2-43-202-148-202.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google">
            유튜브 아이디로 로그인
          </Link>
        </Button>
      </Card>
    </TabsContent>
  );
});

export default YoutuberLogin;
