import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
import { AiOutlineEye } from 'react-icons/ai'
import { newMember } from '@/api/members'
import { useMutation } from 'react-query'
import { useToast } from 'react-toastify'

export default function SignUp() {
  const navigate = useNavigate()
  const [passwordVisible, setPasswordVisible] =
    useState(false)
  const [rePasswordVisible, setRePasswordVisible] =
    useState(false)
  const [rePassword, setRePassword] = useState('')
  // const { showToast } = useToast()
  const [form, setForm] = useState({
    email: '',
    password: '',
    businessName: '',
    businessAddress: '',
  })

  const { mutate } = useMutation(() => newMember(form), {
    onSuccess: () => navigate('/login'),
    // onError: () =>
    //   showToast({
    //     status: 'success',
    //     message:
    //       '패스워드는 문자+숫자로 구성된 8자리 이상이어야 합니다.',
    //   }),
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate()
  }
  const togglePasswordVisibility = (e) => {
    e.preventDefault()
    setPasswordVisible(!passwordVisible)
  }

  const toggleRePasswordVisibility = (e) => {
    e.preventDefault()
    setRePasswordVisible(!rePasswordVisible)
  }

  return (
    <section className='h-full flex justify-center items-center'>
      <form onSubmit={handleSubmit} className=''>
        <Tabs defaultValue='account' className='w-[450px]'>
          <TabsContent value='account'>
            <Card>
              <CardHeader className={cn('items-center')}>
                <CardTitle className={cn('mt-5 mb-5')}>
                  - 광고주 회원가입 -
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-2'>
                <div className='space-y-1'>
                  <Input
                    type='email'
                    name='email'
                    placeholder='이메일'
                    onChange={handleChange}
                  />
                </div>
                <div className='flex items-center gap-1'>
                  <Input
                    type={
                      passwordVisible ? 'text' : 'password'
                    }
                    id='password'
                    name='password'
                    placeholder='비밀번호'
                    onChange={handleChange}
                  />
                  <Button
                    onClick={togglePasswordVisibility}
                  >
                    <AiOutlineEye />
                  </Button>
                </div>
                <div className='flex items-center gap-1'>
                  <Input
                    type={
                      rePasswordVisible
                        ? 'text'
                        : 'password'
                    }
                    id='password'
                    placeholder='비밀번호 확인'
                    value={rePassword}
                    onChange={(e) =>
                      setRePassword(e.target.value)
                    }
                  />
                  <Button
                    onClick={toggleRePasswordVisibility}
                  >
                    <AiOutlineEye />
                  </Button>
                </div>
                <div className='space-y-1'>
                  <Input
                    type='text'
                    name='businessName'
                    placeholder='상호명'
                    onChange={handleChange}
                  />
                </div>
                <div className='space-y-1'>
                  <Input
                    type='text'
                    name='businessAddress'
                    placeholder='사업장 주소'
                    onChange={handleChange}
                  />
                </div>
                <Button className={cn('w-full')}>
                  회원가입
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </section>
  )
}
