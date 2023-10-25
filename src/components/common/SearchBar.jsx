import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { cn } from '@/utils/lib'
import { useNavigate } from 'react-router-dom'
export default function SearchBar() {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const handleSearch = () => {
    navigate(`/search?keyword=${keyword}`)
    setKeyword('')
  }
  return (
    <>
      <div className='flex max-w-[300px] items-center max-sm:hidden'>
        <Input
          type='text'
          className={cn(
            'grow-0 rounded-none rounded-l-lg focus-visible:ring-0 focus-visible:ring-offset-0 max-sm:hidden'
          )}
          value={keyword}
          placeholder='검색어를 입력하세요'
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSearch()
          }}
        />
        <Button
          className={cn(
            'w-fit px-3 rounded-none rounded-r-lg'
          )}
          variant='outline'
          onClick={handleSearch}
        >
          <Search size={14} />
        </Button>
      </div>
      <Sheet className='max-sm:block'>
        <SheetTrigger asChild>
          <Button
            type='submit'
            className={cn(
              'w-fit h-fit px-2 rounded hidden max-sm:block'
            )}
            variant='outline'
          >
            <Search size={14} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='top'
          className='w-full px-4 justify flex gap-1'
        >
          <Input
            placeholder='검색어를 입력하세요'
            className='text-xs w-full'
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSearch()
            }}
          />
          <Button variant='outline' className='px-2'>
            <Search size={14} />
          </Button>
        </SheetContent>
      </Sheet>
    </>
  )
}
