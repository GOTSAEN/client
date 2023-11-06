import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <section className='h-full flex justify-center items-center'>
      <Card className='w-[450px] max-sm:w-full h-[300px] p-8 flex flex-col'>
        <h2 className='text-center text-2xl font-bold py-4 '>
          회원가입을 축하합니다🎉
        </h2>
        <div className='h-full flex flex-col justify-center'>
          <Button
            className='w-full'
            onClick={() => navigate('/login')}
          >
            로그인 페이지로 이동하기
          </Button>
        </div>
      </Card>
    </section>
  )
}
