import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Mail } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/utils/lib'

export default function YoutuberList({ youtuber }) {
  const {
    youtuberMemberId,
    email,
    nickname,
    avatarUri,
    channelId,
    category,
  } = youtuber
  return (
    <ul
      key={youtuberMemberId}
      className='flex w-full justify-between py-2'
    >
      <Avatar>
        <AvatarImage src={avatarUri} alt={nickname} />
      </Avatar>
      <li>{nickname}</li>
      <li>{category || '없음'}</li>
      <Button>
        <Mail size={12} />
      </Button>
    </ul>
  )
}
