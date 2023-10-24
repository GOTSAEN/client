import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/lib'
import { Search } from 'lucide-react'
export default function SearchPage() {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const keyword = params.get('keyword')

  useEffect(() => {
    console.log('object')
  }, [keyword])
  return (
    <section>
      <p className='text-muted-foreground text-sm p-2'>
        총 2개의 결과
      </p>
      <h2 className='text-xl flex items-center'>
        <Search size={20} className='mx-2' />
        {keyword}
      </h2>
    </section>
  )
}
