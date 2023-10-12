import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/utils/lib'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function DatePicker({
  placeholder,
  name,
  value,
  onChange,
}) {
  const [date, setDate] = useState()
  const handleDateChange = (selectedDate) => {
    console.log(selectedDate)
    setDate(selectedDate)
    onChange(
      name,
      new Intl.DateTimeFormat('ko-KR')
        .format(selectedDate)
        .replaceAll(/ /g, '')
        .replaceAll('.', '-')
        .slice(0, -1)
    )
  }

  useEffect(() => {
    if (value) {
      setDate(new Date(value))
      onChange(
        name,
        new Intl.DateTimeFormat('ko-KR')
          .format(new Date(value))
          .replaceAll(/ /g, '')
          .replaceAll('.', '-')
          .slice(0, -1)
      )
    }
  }, [])
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[180px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? (
            format(date, 'yyyy-MM-dd')
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
