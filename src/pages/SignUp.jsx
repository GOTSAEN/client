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
} from '@/components/ui/tabs'
import { cn } from '@/utils/lib'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye } from 'react-icons/ai'
import { newMember } from '@/api/members'
import { useMutation } from 'react-query'
import { toast, useToast } from 'react-toastify'
import { saveUserType } from '@/service/login-auth'
import {
  checkSameValue,
  validatePassword,
} from '@/service/common'
import { auth_form } from '@/css'

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

  const { mutate, isLoading } = useMutation(
    () => newMember(form),
    {
      onSuccess: () => {
        navigate('/welcome')
        saveUserType('advertisement')
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!checkSameValue(form.password, rePassword)) {
      toast.warning('패스워드가 일치하지 않습니다')
      return
    }

    if (!validatePassword(form.password)) {
      toast.warning(
        '패스워드는 8자리 이상의 숫자와 문자 조합입니다'
      )
    }

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
    <section className='main flex justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='w-full flex justify-center'
      >
        <Tabs defaultValue='account' className={auth_form}>
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
                    required
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
                    required
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
                    required
                  />
                  <Button
                    onClick={toggleRePasswordVisibility}
                    required
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
                    required
                  />
                </div>
                <div className='space-y-1'>
                  <Input
                    type='text'
                    name='businessAddress'
                    placeholder='사업장 주소'
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  className={cn('w-full')}
                  disabled={isLoading}
                >
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
