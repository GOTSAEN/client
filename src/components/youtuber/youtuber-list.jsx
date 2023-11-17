import React from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { TableCell, TableRow } from '../ui/table';

export default function YoutuberList({ youtuber }) {
  const { youtuberMemberId, email, nickname, avatarUri, category } = youtuber;

  return (
    <TableRow className="grid grid-cols-12 px-1 py-2" key={youtuberMemberId}>
      <TableCell className="font-medium col-span-4">
        <Avatar className="mr-4">
          <AvatarImage src={avatarUri} alt={nickname} />
        </Avatar>
        <li>{nickname}</li>
      </TableCell>
      <TableCell className="font-medium col-span-4 justify-center">
        <li>{category || '전체'}</li>
      </TableCell>
      <TableCell className="col-span-4 justify-end mr-2">
        <a href={`mailto:${email}`}>
          <Button>
            <Mail size={12} />
          </Button>
        </a>
      </TableCell>
    </TableRow>
  );
}
