import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { cn } from '@/utils/lib'
export default function SearchBar() {
  return (
    <div className='flex max-w-[300px] items-center'>
      <Input
        type='text'
        className={cn(
          'grow-0 rounded-none rounded-l-lg focus-visible:ring-0 focus-visible:ring-offset-0 max-md:hidden'
        )}
      />
      <Button
        type='submit'
        className={cn(
          'w-fit px-3 rounded-none rounded-r-lg max-md:rounded-full'
        )}
      >
        <Search size={14} />
      </Button>
    </div>
  )
}
