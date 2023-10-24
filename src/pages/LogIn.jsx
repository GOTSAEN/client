import { signIn } from '@/api/auth'
import { Button } from '@/components/ui/button'
import { Card, CardDescription } from '@/components/ui/card'
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
  saveUserType,
} from '@/service/login-auth'
import { useAuth } from '@/context/AuthContext'
import { useMutation } from 'react-query'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'

export default function LogIn() {
  const [popup, setPopup] = useState()
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies()
  const { login } = useAuth()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [auth, setAuth] = useState('')
  const { mutate } = useMutation(
    async () => await signIn(form),
    {
      onSuccess: (res) => {
        const { refresh, authorization, usertype } =
          res.headers
        const email = form.email
        setCookie('SESSIONID', authorization)
        setCookie('RENEW', refresh)
        setCookie('User', usertype)
        setCookie('Email', email)
        login()
        navigate('/')
      },
      onError: (err) => {
        toast.error(err.message)
      },
    }
  )
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    mutate()
  }

  const handleOAuth = () => {
    const width = 500 // 팝업의 가로 길이: 500
    const height = 400 // 팝업의 세로 길이 : 500
    const left =
      window.screenX + (window.outerWidth - width) / 2
    const top =
      window.screenY + (window.outerHeight - height) / 2
    const popup = window.open(
      'http://ec2-43-202-148-202.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google',
      '구글로 로그인',
      `width=${width},height=${height},left=${left},top=${top}`
    )
    setPopup(popup)
  }
  useEffect(() => {
    getUserType()
      ? setAuth(getUserType())
      : setAuth('youtuber')
  }, [])

  useEffect(() => {
    if (!popup) return
    // popup으로부터 data를 전달 받을 listener 등록
    console.log(popup)
    if (popup.location?.pathname === '/client')
      popup.close()

    return () => {
      setPopup(null)
    }
  }, [popup])
  return (
    <section className='h-full flex justify-center items-center'>
      {auth && (
        <Tabs defaultValue={auth} className='w-[450px]'>
          <TabsList
            className={cn('grid w-full grid-cols-2')}
          >
            <TabsTrigger
              value='youtuber'
              onClick={() => saveUserType('youtuber')}
            >
              유튜버
            </TabsTrigger>
            <TabsTrigger
              value='advertisement'
              onClick={() => saveUserType('advertisement')}
            >
              광고주
            </TabsTrigger>
          </TabsList>
          <TabsContent value='youtuber'>
            <Card
              className={cn(
                'flex justify-center items-center min-h-[300px] px-10  shadow-lg'
              )}
            >
              <Button
                className={cn('w-full')}
                onClick={handleOAuth}
              >
                유튜브 아이디로 로그인
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
