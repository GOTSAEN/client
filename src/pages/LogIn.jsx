import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { cn } from '@/utils/lib'
import React from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {
  return (
    <div className='flex justify-center items-center h-full z-20'>
      <Tabs
        defaultValue='account'
        className='w-[450px] x-20'
      >
        <TabsList className={cn('grid w-full grid-cols-2')}>
          <TabsTrigger value='account'>유튜버</TabsTrigger>
          <TabsTrigger value='password'>광고주</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          <Card
            className={cn(
              'flex justify-center items-center min-h-[300px] px-10  shadow-lg'
            )}
          >
            <Button className={cn('w-full')}>
              <Link to='/'>유튜브 아이디로 로그인</Link>
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value='password'>
          <Card
            className={cn(
              'flex flex-col justify-center items-center min-h-[300px] px-10 gap-3'
            )}
          >
            <div className='space-y-1 w-full'>
              <Input
                id='current'
                type='id'
                placeholder='아이디'
              />
            </div>
            <div className='space-y-1 w-full'>
              <Input
                id='new'
                type='password'
                placeholder='비밀번호'
              />
            </div>
            <Button className='w-full'>
              <Link to='/'>로그인</Link>
            </Button>
            <CardDescription className='mt-2'>
              - or -
            </CardDescription>
            <CardDescription className='text-lg'>
              <Link to='/signup'>회원가입</Link>
            </CardDescription>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
