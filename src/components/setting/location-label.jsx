import React from 'react'

export default function LocationLabel({ labels }) {
  return (
    <div className='flex items-end pb-4'>
      <h4 className='text-xs text-muted-foreground'>
        {labels.slice(0, labels.length - 1).join(' > ')}{' '}
        {' > '}
      </h4>
      <h1 className='text-xs font-semibold px-1'>
        {labels[labels.length - 1]}
      </h1>
    </div>
  )
}
