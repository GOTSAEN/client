import { login } from '@/api/auth'
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
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { saveUserSession } from '@/service/login-auth'

export default function LogIn() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(form).then((res) => {
      saveUserSession(res.headers)

      navigate('/')
    })
  }
  return (
    <div className=''>
      <Tabs defaultValue='account' className='w-[450px]'>
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
          <form onSubmit={handleSubmit}>
            <Card
              className={cn(
                'flex flex-col justify-center items-center min-h-[300px] px-10 gap-3'
              )}
            >
              <div className='space-y-1 w-full'>
                <Input
                  id='current'
                  type='id'
                  name='email'
                  placeholder='아이디'
                  onChange={handleChange}
                />
              </div>
              <div className='space-y-1 w-full'>
                <Input
                  id='new'
                  type='password'
                  name='password'
                  onChange={handleChange}
                  placeholder='비밀번호'
                />
              </div>
              <Button className='w-full'>로그인</Button>

              <CardDescription className='mt-2'>
                - or -
              </CardDescription>
              <CardDescription className='text-lg'>
                <Link to='/signup'>회원가입</Link>
              </CardDescription>
            </Card>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}
