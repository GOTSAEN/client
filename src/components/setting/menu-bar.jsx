import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import Menu from './menu'
export default function MenuBar() {
  return (
    <nav className='max-sm:block hidden border-b-[1px] py-3 px-4'>
      <Sheet>
        <SheetTrigger asChild>
          <div className='flex w-fit items-center cursor-pointer text-zinc-500 hover:brightness-150'>
            <AlignJustify size={15} />
            <div className='text-xs px-1'>Menu</div>
          </div>
        </SheetTrigger>
        <SheetContent side='left' className='w-fit'>
          <Menu />
        </SheetContent>
      </Sheet>
    </nav>
  )
}
