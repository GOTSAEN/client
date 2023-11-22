import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useApplication } from '@/hooks/use-application';
export default function ProgressYoutuberItem({ data }) {
  const { applicationId, memberId, status, lastModifiedAt, youtubeMemberImage, youtubeMemberNickname, youtubeUrl } =
    data;
  const { updateStatus, isLoading, isSuccess } = useApplication();
  const handleChangeStatus = (toStatus) => {
    updateStatus({ applicationId, data: { status: toStatus }, status: 'progress' });
  };
  return (
    <TableRow className="grid grid-cols-7" key={applicationId}>
      <TableCell className="font-medium col-span-2">
        <img src={youtubeMemberImage} alt="thumbnail" className="h-[40px] w-[40px] cover block rounded-full m-2" />
        {youtubeMemberNickname}
      </TableCell>
      <TableCell className="col-span-2 justify-center">{lastModifiedAt.slice(0, 10)}</TableCell>
      <TableCell className="text-right right  justify-center">
        {youtubeUrl ? (
          <a href={youtubeUrl} target="blank" className="underline underline-offset-2 link">
            조회
          </a>
        ) : (
          <p>미등록</p>
        )}
      </TableCell>
      <TableCell className="text-center justify-end  mr-2 gap-2 col-span-2">
        {youtubeUrl && status === 'PROGRESS' && (
          <>
            <Button onClick={() => handleChangeStatus('FINISHED')}>확인</Button>
            <Button variant="bright" className="bg-yellow-500" onClick={() => handleChangeStatus('REJECTION')}>
              반려
            </Button>
          </>
        )}
        {youtubeUrl && status === 'FINISHED' && (
          <>
            <Button onClick={() => handleChangeStatus('PROGRESS')}>승인취소</Button>
          </>
        )}
        {youtubeUrl && status === 'REJECTION' && (
          <>
            <Button onClick={() => handleChangeStatus('PROGRESS')}>반려취소</Button>
          </>
        )}
      </TableCell>
    </TableRow>
  );
}
