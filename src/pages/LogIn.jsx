import { signIn } from '@/api/auth'
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
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  getUserType,
  saveUserSession,
} from '@/service/login-auth'
import { useAuth } from '@/context/AuthContext'

export default function LogIn() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [auth, setAuth] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signIn(form)
      .then((res) => {
        saveUserSession(res.headers, form)
      })
      .catch((e) => console.log(e))
    login()
    navigate('/')
  }

  useEffect(() => {
    getUserType()
      ? setAuth(getUserType())
      : setAuth('youtuber')
  }, [])
  return (
    <section className='h-full flex justify-center items-center'>
      {auth && (
        <Tabs defaultValue={auth} className='w-[450px]'>
          <TabsList
            className={cn('grid w-full grid-cols-2')}
          >
            <TabsTrigger value='youtuber'>
              유튜버
            </TabsTrigger>
            <TabsTrigger value='advertisement'>
              광고주
            </TabsTrigger>
          </TabsList>
          <TabsContent value='youtuber'>
            <Card
              className={cn(
                'flex justify-center items-center min-h-[300px] px-10  shadow-lg'
              )}
            >
              <Button className={cn('w-full')}>
                <Link
                  to='http://ec2-43-202-148-202.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google'
                  target='blank'
                >
                  유튜브 아이디로 로그인
                </Link>
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value='advertisement'>
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
                    required
                  />
                </div>
                <div className='space-y-1 w-full'>
                  <Input
                    id='new'
                    type='password'
                    name='password'
                    onChange={handleChange}
                    placeholder='비밀번호'
                    required
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
      )}
    </section>
  )
}
